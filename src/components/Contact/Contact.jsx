import { User, Phone } from "lucide-react";
import css from "../Contact/Contact.module.css";

export default function Contact({data:{id, name, number}, handleDelete}){
    return(
        <div className={css.box}>
            <div className={css.boxData}>
                <div className={css.boxUser}>
                    <User size={16} color="black" fill="black"></User> 
                    <p>{name}</p>
                </div>
                <div className={css.boxUser}>
                    <Phone size={16} color="black" fill="black"></Phone> 
                    <p>{number}</p>
                </div>
            </div>
           
            <button className={css.button} onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}