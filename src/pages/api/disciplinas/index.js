// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "@/services/firebase"
import { child, ref, set } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {

    if (req.method == 'GET') {

        child(ref(db), 'disciplinas')

    } else if (req.method == 'POST') {
        const id = v4()
        const dados = req.body

        set(ref(db, 'disciplinas/' + id), dados)

        res.status(200).json(dados)
    }

}
