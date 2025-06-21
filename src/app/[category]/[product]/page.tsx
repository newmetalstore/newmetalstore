'use client'
import { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Hero from '@/components/ui/Hero';
import BackButton from '@/components/ui/BackButton';
import productConfig from "../../../../public/productConfig.json";
import styles from './Detail.module.css';

const pc = JSON.parse(JSON.stringify(productConfig));

function Detail() {
    const pathname = usePathname();
    const category = decodeURIComponent(pathname.split("/")[1]);
    const detail = decodeURIComponent(pathname.split("/")[2]);
    const item = pc?.[category]?.find((item: any) => item.title === detail);

    const [selectedFinish, setSelectedFinish] = useState(item?.finishes?.[0]?.finish);
    const [selectedColor, setSelectedColor] = useState(
        item?.finishes?.[0]?.colors?.find((c: any) => c.available)?.color
    );

    const currentFinish = useMemo(() =>
        item?.finishes?.find((f: any) => f.finish === selectedFinish),
        [item, selectedFinish]
    );

    const currentColor = useMemo(() =>
        currentFinish?.colors?.find((c: any) => c.color === selectedColor),
        [currentFinish, selectedColor]
    );

    const price = currentColor?.price ?? '—';

    return (
        <>
            <BackButton />
            <Hero title={item?.title} description={item?.subtitle} showButton={false} />

            <div className={styles.imageWrapper}>
                <img
                    src={`/${item?.image_link}`}
                    alt={item?.title}
                    className={styles.image}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.description}>
                    <p>{item?.description}</p>
                </div>

                {/* Finishes */}
                <div className={styles.selectorBlock}>
                    <h3 className={styles.label}>Finiture</h3>
                    <div className={styles.swatchRow}>
                        {item?.finishes?.map((finish: any) => {
                            const gradients: Record<string, string> = {
                                lucido: 'linear-gradient(135deg, #f2f2f2, #d1d1d1)',
                                satinato: 'linear-gradient(135deg, #999999, #555555)',
                            };
                            const bg = gradients[finish.finish] || 'gray';

                            return (
                                <div key={finish.finish} className={styles.swatchColumn}>
                                    <div
                                        className={`${styles.finishSwatch} ${selectedFinish === finish.finish ? styles.selected : ''
                                            }`}
                                        style={{ background: bg }}
                                        onClick={() => {
                                            setSelectedFinish(finish.finish);
                                            const defaultColor = finish.colors?.find?.((c: any) => c.available);
                                            setSelectedColor(defaultColor?.color || '');
                                        }}
                                    />
                                    <span className={styles.swatchLabel}>{finish.finish}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Colors */}
                <div className={styles.selectorBlock}>
                    <h3 className={styles.label}>Colori</h3>
                    <div className={styles.swatchRow}>
                        {currentFinish?.colors?.map?.((color: any) => {
                            const gradients: Record<string, string> = {
                                nero: 'linear-gradient(135deg, #000000, #444444)',
                                bianco: 'linear-gradient(135deg, #ffffff, #dddddd)',
                                oro: 'linear-gradient(135deg, #FFD700, #DAA520)',
                                acciaio: 'linear-gradient(135deg, #B0C4DE, #708090)',
                                bronzo: 'linear-gradient(135deg, #cd7f32, #8c5a27)',
                            };
                            const bg = gradients[color.color] || 'gray';
                            const isUnavailable = !color.available;

                            return (
                                <div key={color.color} className={styles.swatchColumn}>
                                    <div
                                        className={`${styles.colorSwatch} ${selectedColor === color.color ? styles.selected : ''
                                            } ${isUnavailable ? styles.unavailable : ''}`}
                                        style={{ background: bg }}
                                        onClick={() => !isUnavailable && setSelectedColor(color.color)}
                                    >
                                        {isUnavailable && <div className={styles.overlay}>Non disponibile</div>}
                                    </div>
                                    <span className={styles.swatchLabel}>{color.color}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>


              
            </div>
              <div className={styles.price}>
                    Prezzo: {typeof price === 'number' ? `€ ${price.toFixed(2)}` : 'Non disponibile'}
                </div>
        </>
    );
}

export default Detail;
