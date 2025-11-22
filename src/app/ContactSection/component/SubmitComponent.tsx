"use client"
import Link from "next/link"
import {useState}  from 'react'
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
export const SubmitComponent = function(){
    const [envoi, setEnvoi] = useState("");

    const messageEnvoiyer =  async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        const response = await fetch("https://formspree.io/f/xkgpdgbj", {
            method: "POST", 
            body: data,
            headers: {
                "Accept": "application/json"
            }
        });
        if(response.ok){
            setEnvoi("✅ Message envoyé avec succès !");
            form.reset();
        }else{
            setEnvoi("❌ Une erreur est survenue.")
        }
    };
    return(
        <section className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 p-5 sm:p-8 md:p-10 bg-neutral-100">
  {/*---- Formulaire ----*/}
  <div className="w-full lg:w-[800px] p-5 sm:p-8 md:p-10 bg-white shadow-lg rounded-3xl">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-2 sm:p-5 text-center lg:text-left">
      Demande de Devis
    </h1>

    <form onSubmit={messageEnvoiyer}>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/*---- Nom ----*/}
        <main>
          <label htmlFor="name" className="font-medium">Nom Complet</label>
          <input
            type="text"
            name="Votre Nom Complet"
            placeholder="Nom Complet"
            className="w-full px-6 py-3 mt-2 border border-sky-300 rounded-full"
          />
        </main>

        {/*---- Email ----*/}
        <main>
          <label htmlFor="email" className="font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="votre@email.com"
            className="w-full px-6 py-3 mt-2 border border-sky-300 rounded-full"
          />
        </main>

        {/*---- Téléphone ----*/}
        <main>
          <label htmlFor="phone" className="font-medium">Téléphone</label>
          <input
            type="phone"
            name="+221 xx xxx xx xx"
            placeholder="Téléphone"
            className="w-full px-6 py-3 mt-2 border border-sky-300 rounded-full"
          />
        </main>

        {/*---- Type de projet ----*/}
        <main>
          <label htmlFor="service" className="font-medium">Type de Projet</label>
          <select
            className="w-full px-6 py-3 mt-2 border border-sky-300 rounded-lg focus:ring focus:ring-sky-300 text-sm appearance-none pr-8"
          >
            <option value="">Sélectionnez un type</option>
            <option value="architectur">Architecture</option>
            <option value="génie-civil">Génie Civil</option>
            <option value="génie-electrique">Génie Électrique</option>
            <option value="génie-mecanique">Génie Mécanique</option>
            <option value="hydraulique-plomberie">Hydraulique & Plomberie</option>
            <option value="construction">Construction</option>
            <option value="Bim">BIM</option>
          </select>
        </main>
      </article>

      {/*---- Sujet & Message ----*/}
      <article className="mt-5">
        <main>
          <label htmlFor="sujet" className="font-medium">Sujet *</label>
          <input
            type="text"
            name="Objet de votre demande"
            placeholder="Sujet"
            className="w-full px-6 py-3 mt-2 border border-sky-300 rounded-full"
          />
        </main>

        <main className="mt-3">
          <label htmlFor="message" className="font-medium">Message *</label>
          <textarea
            name="Message"
            defaultValue="Contacter Nous"
            className="w-full px-6 py-3 mt-2 border border-sky-300 rounded-lg h-[200px] sm:h-[250px] md:h-[300px] resize-none"
          />
        </main>

        <main>
          <button
            type="submit"
            className="w-full px-6 py-3 mt-4 text-white rounded-full bg-sky-500 hover:bg-sky-600 transition"
          >
            Envoyer la Demande
          </button>
          <p className="mt-2 text-center text-sm text-green-600">{envoi}</p>
        </main>
      </article>
    </form>
  </div>

  {/*---- Aside ----*/}
  <aside className="flex flex-wrap lg:flex-col justify-center items-center gap-5 lg:gap-10 mt-5">
    <div className="w-[90%] sm:w-[300px] p-5 bg-white shadow-md rounded-2xl flex gap-5">
      <CiLocationOn className="text-5xl sm:text-6xl p-2 bg-sky-200 rounded-full" />
      <main>
        <h4 className="text-lg font-bold">Adresse</h4>
        <p>Sénégal, Dakar</p>
        <p>Derklé Cité Marine</p>
      </main>
    </div>

    <div className="w-[90%] sm:w-[300px] p-5 bg-white shadow-md rounded-2xl flex gap-5">
      <CiPhone className="text-5xl sm:text-6xl p-2 bg-sky-200 rounded-full" />
      <main>
        <h4 className="text-lg font-bold">Téléphone</h4>
        <p>+221 77 086 22 26</p>
        <p>+221 76 597 83 39</p>
        <p>+221 33 867 15 35</p>
      </main>
    </div>

    <div className="w-[90%] sm:w-[300px] p-5 bg-white shadow-md rounded-2xl flex gap-5">
      <MdOutlineEmail className="text-5xl sm:text-6xl p-2 bg-sky-200 rounded-full" />
      <main>
        <h4 className="text-lg font-bold">Email</h4>
        <p>avbtp7@gmail.com</p>
      </main>
    </div>

    <div className="w-[90%] sm:w-[300px] p-5 bg-white shadow-md rounded-2xl flex gap-5">
      <MdOutlineHistoryToggleOff className="text-5xl sm:text-6xl p-2 bg-sky-200 rounded-full" />
      <main>
        <h4 className="text-lg font-bold">Horaires</h4>
        <p>Lun - Ven: 8h00 - 18h00</p>
        <p>Sam: 9h00 - 13h00</p>
        <p>Dim: Fermé</p>
      </main>
    </div>

    <div className="w-[90%] sm:w-[320px] p-5 bg-white shadow-md rounded-2xl flex gap-5 justify-center items-center">
      <Link href="https://www.facebook.com/profile.php?id=61581544035912"><FaFacebook className="text-4xl sm:text-5xl p-2" /></Link>
      <Link href="https://www.instagram.com/reel/DRRdokfEvUj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><FaInstagram className="text-4xl sm:text-5xl p-2" /></Link>
      <Link href="https://www.linkedin.com/in/adams-btp-1067a3205/"><FaLinkedin className="text-4xl sm:text-5xl p-2" /></Link>
      <Link href="https://www.tiktok.com/@av.btp"><FaTiktok className="text-4xl sm:text-5xl p-2" /></Link>
    </div>
  </aside>
</section>

    )
}