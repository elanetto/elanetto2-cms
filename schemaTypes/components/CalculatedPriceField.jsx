import { useEffect, useMemo, useState } from 'react'
import { useClient, useFormValue } from 'sanity'

export default function CalculatedPriceField() {
  const client = useClient({ apiVersion: '2023-01-01' })

  const rawProducts = useFormValue(['products'])

  const productRefs = useMemo(() => {
    return Array.isArray(rawProducts) ? rawProducts : []
  }, [rawProducts])

  const [price, setPrice] = useState(0)
  const [originalPrice, setOriginalPrice] = useState(0)

  useEffect(() => {
    if (productRefs.length === 0) {
      setPrice(0)
      setOriginalPrice(0)
      return
    }

    const ids = productRefs
      .map((p) => p?._ref)
      .filter(Boolean)

    if (ids.length === 0) {
      setPrice(0)
      setOriginalPrice(0)
      return
    }

    const fetchPrices = async () => {
      try {
        const products = await client.fetch(
          `*[_id in $ids]{price}`,
          { ids }
        )

        const total = products.reduce(
          (sum, p) => sum + (p.price || 0),
          0
        )

        const discounted = total * 0.8
        const rounded = Math.round(discounted / 5) * 5

        setOriginalPrice(total)
        setPrice(rounded)
      } catch {
        setPrice(0)
        setOriginalPrice(0)
      }
    }

    fetchPrices()
  }, [productRefs, client])

  const savings = originalPrice - price

  return (
    <div style={{ padding: '8px 0' }}>
      {originalPrice > 0 && (
        <div style={{ textDecoration: 'line-through', opacity: 0.6 }}>
          {originalPrice} kr
        </div>
      )}

      <div style={{ fontWeight: 'bold', fontSize: '16px' }}>
        💸 {price} kr
      </div>

      {savings > 0 && (
        <div style={{ color: '#4ade80', fontSize: '14px' }}>
          Spar {savings} kr 🎉
        </div>
      )}
    </div>
  )
}