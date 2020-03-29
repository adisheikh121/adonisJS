'use strict'

const { Command } = require('@adonisjs/ace')

class Migration extends Command {
  static get signature () {
    return 'migration'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    this.info('Dummy implementation for migration command')
  }
}

module.exports = Migration
