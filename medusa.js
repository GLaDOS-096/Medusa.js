// ought to be medusa config file for medusa-compile

import 'medusa.core'

import 'user_agent_check'
import 'ie_spec'
import 'bom_check'

Medusa.extend('user_agent_check')
Medusa.extend('ie_spec')
Medusa.extend('bom_check')