import onChange from "on-change";
import * as yup from 'yup';
import {isEmpty, keyBy, has} from "lodash";

const phoneRegEx = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm

const apiClient = {
    sendRegistration: async (data) => {
        return new Promise((resolve, reject) => {
            console.log('sending data:', data)
            setTimeout(() => {
                const random = Math.random()
                if (random < 0.6) {
                    resolve({
                        code: 200,
                        data: 'user created'
                    })
                } else {
                    reject({
                        code: 500,
                        data: 'some error on server'
                    })
                }

            }, 1000)
        })
    }
}

yup.setLocale({
    string: {
        required: 'Обязательное поле',
        min: 'не менее 6 символов',
        email: 'email не валидный',
    }
})

const formSchema = yup.object().shape({
    name: yup.string().nullable().trim().required('Имя обязательно'),
    email: yup.string().nullable().required('Введите электронную почту').email('Некорректная электронная почта'),
    phone: yup.string().nullable().required('Введите телефон').matches(phoneRegEx, {message: 'Введите корректный номер телефона'}),
    password: yup.string().nullable().required().min(6, (field) => `минимум ${field.min} символов`),
    passwordConfirmation: yup.string().nullable()
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
    view.form.addEventListener('submit', async (evt) => {
        evt.preventDefault()
        console.log('submit')
        state.processState = 'sending'

        try {
            const result = await apiClient.sendRegistration(state.formInputs)
            console.log(result)
            state.processState = 'sent';
        } catch (error) {
            state.processState = 'error';
            state.processErrors = error.data
        }
    })

    // вернет функцию рендера-обновления представления по изменению модели
    const render = (view) => (path, value, prevValue) => {
        switch (path) {
            case 'errors':
                renderErrors(value, prevValue)
                break;
            case 'valid': //
                view.submitBtn.disabled = !value
                break
            case 'processState':
                handleProcessState(view, value)
                break
            case 'processError':
                handleProcessErrors(view, value)
                break
            default:
                break
        }
    }

    // рендер состояний инпутов
    const renderErrors = (errors, prevErrors) => {
        Object.entries(view.formInputs).forEach(([fieldName, fieldEl]) => {
            const fieldHadError = has(prevErrors, fieldName) // у поля были ошибки
            const fieldHasError = has(errors, fieldName) // у поля есть ошибки
            const error = errors[fieldName]
            const prevError = prevErrors[fieldName]

            // если нет ошибок то он валидный
            if (!fieldHasError) {
                fieldEl.classList.add('is-valid')
            }

            // если у инпута не было ошибки и не появилась
            if (!fieldHadError && !fieldHasError) {
                return
            }

            // если у инпута есть ошибки но он не тронут
            if (fieldHasError && error.value === null) {
                return;
            }

            if (fieldHadError && !fieldHasError) {
                const errorContainer = fieldEl.nextElementSibling
                errorContainer.remove()
                fieldEl.classList.remove('is-invalid')
                return
            }
            // если ошибка была и есть сейчас
            if (fieldHadError && fieldHasError && prevError.value !== null) {
                const errorContainer = fieldEl.nextElementSibling
                errorContainer.textContent = error.message
                return
            }
            fieldEl.classList.remove('is-valid')
            fieldEl.classList.add('is-invalid')
            fieldEl.insertAdjacentHTML('afterend', `<div class="invalid-feedback">${error.message}</div>`)
        })
    }

    // рендер состояний формы
    const handleProcessState = (view, processState) => {
        switch (processState) {
            case 'sent':
                view.form.innerHTML = 'User Created!';
                break;
            case 'error':
                view.submitBtn.disabled = false;
                break;
            case 'sending':
                view.submitBtn.disabled = true;
                break;
            case 'filling':
                view.submitBtn.disabled = false;
                break;

            default:
                throw new Error(`Unknown process state: ${processState}`);
        }
    };

    // рендер ошибок процесса
    const handleProcessErrors = (view, errors) => {
        alert(`Ошибка при отправке${errors}`)
        // if (errors) {
        //     view.form.insertAdjacentHTML('afterend',`<p class="error">Ошибка при отправке${errors}</p>`)
        // } else {
        //     view.form.nextElementSibling.remove()
        // }
    }


    // model (модель)
    // описывает состояние, обновляет представление
    const state = onChange(
        {
            formInputs: {
                name: null,
                email: null,
                phone: null,
                password: null,
                passwordConfirmation: null
            },
            errors: {},
            valid: null,
            processState: 'filling',
            processErrors: null,
        },
        render(view)
    )
}

app()