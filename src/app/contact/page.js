"use client"; 
import { useEffect, useState } from "react";
import { motion } from "motion/react"

export default function ContactPage() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      async function fetchContact() {
        try {
          const res = await fetch("/api/contact");
          const result = await res.json();    
          const contactArray = result?.data?.getContacts || [];
          setContacts(contactArray);
        } catch (err) {
          console.error("載入關於我的資料錯誤：", err);
          setContacts([]);
        }
      }

      fetchContact();
    }, []);
    return (
    <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="w-full h-screen flex items-center justify-center text-center">

        <div className="w-[500px] rounded-3xl flex flex-col items-center gap-6 p-6">
          <h2 className="text-2xl">聯絡我</h2>

           {contacts.map((contact, index) => (
          <a
            href={contact.linkHref}
            rel={contact.linkRel}
            target="_blank"
            className="w-full py-2 bg-gray-600 rounded hover:bg-gray-700 transition-colors text-white text-lg" key={index}
          >
            {contact.text}
          </a>
         ))}
      </div>
    </motion.section>
    );
}
