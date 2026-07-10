import './Item.css'
export const Item = ({name, description, price, image, children}) => {

    return(
        <article className="card text-bg-secondary bg-opacity-25 text-decoration-none">
                 {image ?<img src={image} alt={"foto de producto"}/> : <p>Sin imagen</p>}
                <h3>{name || <p>Sin nombre</p>}</h3>
                <p>{description || <p>Sin description</p>}</p>
                <p>${price || <p>Sin precio</p>}</p>
                {children}
        </article>
    )
}