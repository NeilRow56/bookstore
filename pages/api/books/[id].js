import dbConnect from "../../../lib/mongo"
import nc from "next-connect";
import { getSingleBook, updateSingleBook, deleteSingleBook } from "../../../controllers/bookControllers"


const handler = nc()

dbConnect()

handler.get(getSingleBook)

handler.put(updateSingleBook)

handler.delete(deleteSingleBook)

export default handler