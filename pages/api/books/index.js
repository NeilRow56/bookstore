import dbConnect from "../../../lib/mongo"
import nc from "next-connect";
import { allBooks, newBook } from "../../../controllers/bookControllers"


const handler = nc()

dbConnect()

handler.get(allBooks)
handler.post(newBook)

export default handler


