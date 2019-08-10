export default class Input {
  constructor (name, placeholder, type, required = false, requiredMessage = 'this is a required field') {
    this.name = name
    this.placeholder = placeholder
    this.type = type
    this.required = required
    this.requiredMessage = requiredMessage
  }
}
