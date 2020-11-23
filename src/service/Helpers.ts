export default function IntRandom (max:number = Number.MAX_SAFE_INTEGER)  {
    return Math.floor(Math.random() * Math.floor(max))
}
