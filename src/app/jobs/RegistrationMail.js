import Mail from '../lib/Mail'

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data

    await Mail.sendMail({
      from: 'Admin <admin@queue.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'User registration',
      html: `Hello ${user.name}, welcome to the queuing system.`,
    })
  },
}
