import ImageItem from "./ImageItem";

function ImageList({ImageProps}) {
    if (!ImageProps || !Array.isArray(ImageProps)) {
        return <div className="error">Geçersiz veri veya Görsel Bulunamadı</div>;
    }
    return ( 


        <div className="imagesList">
            {
                ImageProps.map((image,index) =>{
                    return <ImageItem key={index} image={image}/>
                })
            }
        </div>




     );}
export default ImageList;