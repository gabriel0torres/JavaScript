import { randomUUID } from "crypto"
import { sql } from "./db.js"

export class DatabasePostgres{
    async list(search){

        let videos

        if(search){
            videos = await sql`select * from tbl_videos where nome ilike "${search}"`
        }else{
            videos = await sql`select * from tbl_videos`
        }

        return videos    
    }

    async create(video){
        const {title, description, duration } = video
        await sql`insert into tbl_videos(nome, descricao, duracao) values(${title}, ${description}, ${duration})`
        
    }

    async update(id, video){

        const {title, description, duration } = video
        await sql`UPDATE tbl_videos set nome = ${title}, descricao = ${description}, duracao = ${duration} where ID = ${id}`
  
    }

    async delete(id){
        await sql`DELETE FROM tbl_videos where ID = ${id}`
    }


}