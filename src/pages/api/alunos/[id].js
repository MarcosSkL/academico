// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "@/services/firebase"
import { child, get, ref, remove, set, update } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {

    const id = req.query.id

    if (req.method == 'GET') {

        get(child(ref(db), 'alunos/' + id)).then(snapshot => {

            res.status(200).json(snapshot.val())
        })


    } else if (req.method == 'PUT') {

        const dados = req.body

        update(ref(db, 'alunos/' + id), dados)
        res.status(200).json(dados)

    } else if (req.method == 'DELETE') {

        remove(ref(db, 'alunos/' + id))
        res.status(200).json(id)

    }

} export const config = {
    api: {
        externalResolver: true
    }
}
