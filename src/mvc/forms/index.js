import onChange from "on-change";
import * as yup from 'yup';
import {isEmpty, keyBy, has} from "lodash";

const phoneRegEx = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm

yup.setLocale({
    string: {
        required: 'Обязательное поле',
        min: 'не менее 6 символов',
        email: 'email не валидный',
    }
})

const formSchema = yup.object().shape({
    name: yup.string().trim().required('Имя обязательно'),
    email: yup.string().required('Введите электронную почту').email('Некорректная электронная почта'),
    phone: yup.string().required('Введите телефон').matches(phoneRegEx, {message: 'Введите корректный номер телефона'}),
    password: yup.string().required().min(6, (field) => `минимум ${field.min} символов`),
    passwordConfirmation: yup.string()
        .required('пароль обязателен')
        .oneOf(
            [yup.ref('password'), null],
            'пароли не совпадают',
        ),

});

const validate = (fields) => {
    try {
        formSchema.validateSync(fields, { abortEarly: false });
        return {};
    } catch (e) {
        return keyBy(e.inner, 'path');
    }
};


const app = () => {

    //  view (представление)
    const view = {
        formInputs: {
            name: document.getElementById('sign-up-name'),
            email: document.getElementById('sign-up-email'),
            phone: document.getElementById('sign-up-phone'),
            password: document.getElementById('sign-up-password'),
            passwordConfirmation: document.getElementById('sign-up-password-confirmation'),
        },
        form: document.querySelector('[data-form="sign-up"]'),
        submitBtn: document.querySelector('input[type="submit"]')
    }

    // контроллеры
    // изменяют модель
    Object.entries(view.formInputs).forEach(([inputName, element]) => {
        element.addEventListener('input', (evt) => {
            const {value} = evt.target
            state.formInputs[inputName] = value
            const errors = validate(state.formInputs)
            state.errors = errors
            state.valid = isEmpty(errors)
        })
    })

    // вернет функцию рендера-обновления представления по изменению модели
    const render = (view) => (path, value, prevValue) => {
        console.log('render', {path, value, prevValue})
        switch (path) {
            case 'errors':
                renderErrors(value, prevValue)
                break;
            case 'valid':
                view.submitBtn.disabled = !value
                break
        }
    }

    const renderErrors = (errors, prevErrors) => {

        Object.entries(view.formInputs).forEach(([fieldName, fieldEl]) => {
            const fieldHadError = has(prevErrors, fieldName) // у поля были ошибки
            const fieldHasError = has(errors, fieldName) // у поля есть ошибки
            const error = errors[fieldName]
            // если у инпута не было ошибки и не появилась
            if (!fieldHadError && !fieldHasError) {
                return
            }
            if (fieldHadError && !fieldHasError) {
                const errorContainer = fieldEl.nextElementSibling
                errorContainer.remove()
                fieldEl.classList.remove('is-invalid')
                return
            }
            // если ошибка была и есть сейчас
            if (fieldHadError && fieldHasError) {
                const errorContainer = fieldEl.nextElementSibling
                errorContainer.textContent = error.message
                return
            }
            fieldEl.classList.add('is-invalid')
            fieldEl.insertAdjacentHTML('afterend', `<div class="invalid-feedback">${error.message}</div>`)
        })
    }


    // model (модель)
    // описывает состояние, обновляет представление
    const state = onChange(
        {
            formInputs: {
                name: '',
                email: '',
                phone: '',
                password: '',
                passwordConfirmation: ''
            },
            errors: {},
            valid: null
        },
        render(view)
    )
}

app()