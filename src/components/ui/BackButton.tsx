import { ArrowLeft } from 'lucide-react';
import styles from './BackButton.module.css';

function BackButton() {


  return (
    <div onClick={() => window.history.back()} className={styles.backButtonWrapper}>
      <ArrowLeft size={30}></ArrowLeft>
    </div>
    
  )
}

export default BackButton