import React from "react";

export default function Agendamento() {
    return (
        <div>
            {/* Informações Profile */}
            <div className="container">
                <div className="container-profile  flex items-center p-7 gap-7">
                    <div className="foto-empreendedor 
                    flex justify-center items-center
                    bg-gray-500
                    h-30 w-30 rounded-full">
                        <i class="fa-solid fa-user text-5xl text-neutral-200"></i>
                    </div>
                    <div className="container-info flex flex-col">
                        <span className="font-bold text-xl">Nome Business</span>
                        <span className="">@nomebusiness</span>
                    </div>
                </div>
            </div>
            {/* Container para selecionar o dia */}
            <div className="bg-neutral-900 p-5 text-white">
                <span className="text-xl font-semibold p-4">Escolha o dia</span>
                <div className="flex justify-center items-center pt-4 gap-2">
                    <div className="flex flex-col justify-center items-center rounded-md
                     p-2 w-[10vw] h-18 ">
                        <div className="text-neutral-400">Dom</div>
                        <div className="font-bold">25</div>
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-md
                     p-2 w-[10vw] h-18 
                     border border-neutral-300">
                        <div className="text-neutral-400">Seg</div>
                        <div className="font-bold">26</div>
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-md
                     p-2 w-[10vw] h-18 ">
                        <div className="text-neutral-400">Ter</div>
                        <div className="font-bold">27</div>
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-md
                     p-2 w-[10vw] h-18 ">
                        <div className="text-neutral-400">Qua</div>
                        <div className="font-bold">28</div>
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-md
                     p-2 w-[10vw] h-18 ">
                        <div className="text-neutral-400">Qui</div>
                        <div className="font-bold">29</div>
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-md
                     p-2 w-[10vw] h-18 ">
                        <div className="text-neutral-400">Sex</div>
                        <div className="font-bold">30</div>
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-md
                     p-2 w-[10vw] h-18 ">
                        <div className="text-neutral-400">Sáb</div>
                        <div className="font-bold">1</div>
                    </div>
                </div>
            </div>

            {/* Selecionar Horário */}
            <div className="bg-white p-5 text-black">
                <span className="text-xl font-semibold p-4">Escolha o horário</span>
                <div className="flex flex-wrap justify-center items-center pt-4 gap-2">
                    <div className="flex flex-col justify-center items-center
                        w-[18vw] h-9 
                        bg-black text-white
                        border border-neutral-200">
                        <div className="font-bold">09:30 AM</div>
                    </div>
                    <div className="flex flex-col justify-center items-center
                        w-[18vw] h-9 
                        border border-neutral-900 text-black">
                        <div className="font-bold">10:30 AM</div>
                    </div>
                    <div className="flex flex-col justify-center items-center
                        w-[18vw] h-9 
                        border border-neutral-900 text-black">
                        <div className="font-bold">10:30 AM</div>
                    </div>
                    <div className="flex flex-col justify-center items-center
                        w-[18vw] h-9 
                        border border-neutral-900 text-black">
                        <div className="font-bold">10:30 AM</div>
                    </div>
                    <div className="flex flex-col justify-center items-center
                        w-[18vw] h-9 
                        border border-neutral-900 text-black">
                        <div className="font-bold">10:30 AM</div>
                    </div>
                    <div className="flex flex-col justify-center items-center
                        w-[18vw] h-9 
                        border border-neutral-900 text-black">
                        <div className="font-bold">10:30 AM</div>
                    </div>
                    <div className="flex flex-col justify-center items-center
                        w-[18vw] h-9 
                        border border-neutral-900 text-black">
                        <div className="font-bold">10:30 AM</div>
                    </div>
                    <div className="flex flex-col justify-center items-center
                        w-[18vw] h-9 
                        border border-neutral-900 text-black">
                        <div className="font-bold">10:30 AM</div>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center
                        w-[18vw] h-9 
                        border border-neutral-900 text-black">
                        <div className="font-bold">10:30 AM</div>
                    </div>
                </div>
            </div>


        </div>
    )

}