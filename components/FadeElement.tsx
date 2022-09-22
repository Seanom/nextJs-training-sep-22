import React, {useEffect, useState} from 'react';
import styles from './Animation.module.scss';

function FadeElement(props): JSX.Element {

   const [fadeProp, setFadeProp] = useState({
      fade: styles.fadeInitial
   });

   useEffect(() => {
      const timeout = setInterval(() => {
         if (fadeProp.fade === styles.fadeInitial) {
            setFadeProp({
               fade: styles.fadeIn
            })
         }
      }, 300);
      return () => clearInterval(timeout)
   }, [fadeProp])

   return (
       <>
         <div className={fadeProp.fade} style={{ transitionDelay: props.delay}}>
            {props.children}
         </div>
      </>
   )
}

export default FadeElement

