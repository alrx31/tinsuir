import React, {Suspense} from "react";
import "./footer.css";
import {NavLink} from "react-router-dom";
import {Canvas} from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import {Model} from "./3Dmodel";

export const Footer = (
    {isAdmin}
) =>{
    return (
        <footer>
            <div className="smallBut">
                <NavLink to="/list">Список</NavLink>
            </div>
            <div className="bigButton">

                <NavLink to="/find">

                    <Canvas style={{
                        position: "absolute",
                        borderRadius: "20%",
                        top: "-40%",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        zIndex : "99999",
                    }}

                    >
                        <ambientLight
                            intensity={.75}
                        />
                        <pointLight position={[10, 10, 10]} />

                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            enableRotate={true}
                            maxAzimuthAngle={Math.PI / 6} // 10 градусов в радианах
                            minAzimuthAngle={-Math.PI / 6}
                            maxPolarAngle={Math.PI / 6}
                            minPolarAngle={-Math.PI / 6}
                            position={[0,-10,-10]}
                            target={[0,-10,-9]}
                        />
                        <Suspense fallback={"Events"}>
                            <Model/>
                        </Suspense>
                    </Canvas>
                </NavLink>


            </div>
            <div className="smallBut">
                {
                    isAdmin ? <NavLink to="/create">создать</NavLink> : <NavLink to="/my">мои</NavLink>
                }
            </div>

        </footer>
    );
}