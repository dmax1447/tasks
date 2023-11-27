import path from 'path'
import fs from 'fs';
import NotExistsError from './errors/NotExistsError.js';
import NotReadableError from './errors/NotReadableError.js';

class File {
  constructor(filepath) {
    this.filepath = path.resolve(filepath)
  }

  read() {
    if (!fs.existsSync(this.filepath)) {
      throw new NotExistsError(`file ${this.filepath} not exist`)
    }

    try {
      fs.accessSync(this.filepath)
    } catch (e) {
      throw new NotReadableError(`file ${this.filepath} not readable`)
    }

    return fs.readFileSync(this.filepath, 'UTF-8')
  }
}

export default File;
