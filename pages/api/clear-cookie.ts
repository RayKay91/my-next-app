// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiResponse} from 'next'

export default (req, res:NextApiResponse) => {
res.clearPreviewData()
  res.send('preview cookie removed')
}
