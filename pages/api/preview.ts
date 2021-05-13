// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiResponse} from 'next'

export default (req, res:NextApiResponse) => {
const data = 'this can be any data that you want to send to getStaticProps. It will be avaliable on context.previewData'
  res.setPreviewData(data, {maxAge: 5 * 60})

  res.send('preview cookie set')
}
