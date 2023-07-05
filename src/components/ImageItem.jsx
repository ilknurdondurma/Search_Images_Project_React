function ImageItem({image}) {
    console.log(image);
    return ( 
        <div>
            <img className="imageItemImg" src={image.urls.small} alt="" />
        </div>
     );
}

export default ImageItem;