import * as React from 'react'
import {
  Html,
  Head,
  Font,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

export function Email({ name, text }) {
  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <title>School Email</title>
        <Font
          fontFamily='Roboto'
          fallbackFontFamily='Verdana'
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle='normal'
        />
      </Head>
      <Preview>Hello, I am {name}!</Preview>
      <Section>
        <Row>
          <Text>Here&apos;s my Query : </Text>
        </Row>
        <Row>
          <Text>{text}</Text>
        </Row>
      </Section>
    </Html>
  )
}

export default Email
