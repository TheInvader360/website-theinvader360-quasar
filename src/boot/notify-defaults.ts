import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'

export default boot(() => {
  Notify.setDefaults({
    position: 'top',
    timeout: 2500,
    actions: [{ icon: 'close', color: 'white' }]
  })
})
