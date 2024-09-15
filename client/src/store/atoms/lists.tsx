import { atom } from 'recoil';
interface List{
    name:string,
    colour:string
}
const listsatom = atom<List[]>({
    key:"listsatom",
    default:[]
})


export default listsatom;