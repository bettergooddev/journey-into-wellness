import type { CollectionBeforeChangeHook } from 'payload'

export const computeDiscountedPrice: CollectionBeforeChangeHook = ({ data, operation }) => {
  if (operation === 'create' || operation === 'update') {
    const originalPrice = Number(data.price || 0)
    const enableDiscount = Boolean(data.enableDiscount)
    const discountType = data.discountType
    const discountAmount = Number(data.discountAmount || 0)

    let finalPrice = originalPrice

    if (enableDiscount && discountType && discountAmount) {
      if (discountType === 'percentage') {
        finalPrice = originalPrice - originalPrice * (discountAmount / 100)
      }

      if (discountType === 'fixed') {
        finalPrice = originalPrice - discountAmount
      }
    }

    return {
      ...data,
      discountedPrice: finalPrice,
    }
  }

  return data
}
