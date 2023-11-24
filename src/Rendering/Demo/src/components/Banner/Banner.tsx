import { useMemo } from 'react'
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs'

import { useSession } from '@/components/SessionContext'

import Image from 'next/image'

import sitecore from '@/assets/sitecore.svg'

export type BannerProps = any & {
  timestamp: string
  fields: {
    data: {
      datasource: {
        id: string
        title: { value: string }
        description: { value: string }
      }
    }
  }
}

const Banner = ({ timestamp, fields }: BannerProps): JSX.Element => {
  const session = useSession()

  const data = fields?.data?.datasource

  const src = useMemo(() => {
    const code = session.country?.toUpperCase()

    if (session.country === 'global') return sitecore

    return `https://flagsapi.com/${code}/flat/64.png`
  }, [session.country])

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-1 fw-bold text-body-emphasis">{data?.title?.value}</h1>
      <div className="col-lg-6 mx-auto">
        <span className="display-6">{timestamp}</span>
        <p className="lead mb-4">{data?.description?.value}</p>
        <p className="badge text-bg-warning">Country: {session.country}</p>
        <p>
          <Image src={src} width={64} height={64} alt="Sitecore" />
        </p>
      </div>
    </div>
  )
}

export default withDatasourceCheck()<BannerProps>(Banner)
