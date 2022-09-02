class Factory{
    static cantProdut:number=0;
    private codigo:string;
    private id:number=0;
    private name:string;
    private price:number;
    private src:string;
    private description:string;
    constructor(){
        Factory.cantProdut++
        this.id=Date.now();
    }
    setCodigo(codigo:string){
        this.codigo=codigo;
    }
    setName(name:string){
        this.name=name;
    }
    setDescription(description:string){
        this.description=description;
    }
    setPrice(price:number){
        let newprice = price +price * 0.3
        this.price=newprice;
    }
    setSrc(src:string){
        this.src=src
    }
    getCantProduct(){
        return Factory.cantProdut
    }
    getAlldetails(){
        return {
            id:this.id,
            code:this.codigo,
            description:this.description,
            price:this.price,
            src:this.src     
           }
    }
}
export default Factory