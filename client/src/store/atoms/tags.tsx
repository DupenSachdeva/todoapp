import { atom } from "recoil";
interface Tag{
    name:string,
    colour:string
}
const tagsatom = atom<Tag[]>({
    key:"tagsatom",
    default:[]
})

export default tagsatom;