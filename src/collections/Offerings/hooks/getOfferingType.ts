import { Offering } from '@/payload-types'

export const getOfferingType = (offering: Offering) => {
  switch (offering.type) {
    case 'session':
      return 'Live Session'
    case 'course':
      return 'Course'
    case 'bundle':
      return 'Bundle'
    default:
      return offering.type
  }
}
