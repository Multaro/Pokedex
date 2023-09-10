import styles from '../styles/Pokedex.module.css';
import React, { useState, useEffect, useRef } from 'react'
//@ts-ignore
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import Visor from './Visor';
import Controller from './Controller';
import VisorModel from '../models/VisorModel';

export default function Pokedex(props: any): JSX.Element {
    const [visor, setVisor] = useState<VisorModel>(new VisorModel(0, 0));
    const [loading, setLoading] = useState<boolean>(false);
    const [vantaEffect, setVantaEffect] = useState<FOG>(0);
    const [pokedexLight, setPokedexLight] = useState<boolean>(false);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                FOG({
                    el: vantaRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    highlightColor: 0x4deddb,
                    midtoneColor: 0x34c3dc,
                    lowlightColor: 0xb0e7f2,
                    baseColor: 0xe0f1f7,
                    blurFactor: 0.46,
                    speed: 4.00,
                    zoom: 2.30                    
                })
            );
        }

        return () => {
            if (vantaEffect) vantaEffect.destory();
        };

    }, [vantaEffect]);

    const delaySetVisor = () =>  {
        return new Promise(resolve => setTimeout(resolve, 200));
    };

    async function initializeAndSetVisor(newVisor: VisorModel) {
        try {
            setLoading(true);
            const shouldInitialize = await newVisor.initialize();

            if (shouldInitialize) {
                await delaySetVisor();
                setVisor(newVisor);
            }
          
        } catch (error) {
          console.error('Erro na inicialização:', error);

        } finally {
          setLoading(false);
        }
    }
    
    async function renderVisorChange(direction: string) {
        doBlink();
        const newVisor = visor.changeVisor(direction);

        if (direction === 'Select') {
            setVisor(newVisor);
            return;
        } else if (direction === 'Right' || direction === 'Left') initializeAndSetVisor(newVisor);
        else if (direction === 'Down' || direction === 'Up') setVisor(newVisor);
    }

    async function renderBySearch(searchItem: number) {
        const newVisor = visor.changeVisorBySearch(searchItem);
        setVisor(newVisor);
        initializeAndSetVisor(newVisor)
    }

    const doBlink = () => {
        setPokedexLight(true);
        setTimeout(() => {
            setPokedexLight(false);
        }, 200);
    };

    return (
        <div className={styles.pokedex}>
            <div ref={vantaRef} className={styles.pokedexFrame} />

            <div className={`${styles.pokedexLight} ${pokedexLight ? styles.isTrue : styles.isFalse}`} />
            <div className={`${styles.pokedexBottomLight} ${pokedexLight ? styles.isTrue : styles.isFalse}`} />
            <div className={`${styles.pokedexBottomLight2} ${pokedexLight ? styles.isTrue : styles.isFalse}`} />
            <div className={`${styles.pokedexSideLight} ${pokedexLight ? styles.isTrue : styles.isFalse}`} />
            <div className={`${styles.pokedexSideLight2} ${pokedexLight ? styles.isTrue : styles.isFalse}`} />

            <Visor value={visor} loading={loading} onChange={(number) => renderBySearch(number)} />
            <Controller
                isSelect={visor.isSelect}
                onChange={(direction: string) => renderVisorChange(direction)}
            />
        </div>
    );
}
