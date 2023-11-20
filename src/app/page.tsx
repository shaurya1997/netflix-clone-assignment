"use client";
import Banner from "@/components/Banner";
import FilterData from "@/components/FolderData";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ModalWrap from "@/components/Modal";
import Row from "@/components/Row";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  return (
    <>
      {!search.length ? (
        <>
          <Header setSearch={setSearch} />
          <Banner setShowModal={setShowModal} showModal={showModal} />
          <Row title="Tranding Now" setShowModal={setShowModal} />
          <Row title="US TV Shows" setShowModal={setShowModal} />
          <Row
            title="Top 10 TV Shows in India Today"
            setShowModal={setShowModal}
          />
          <Row title="Young Adult Movies & shows" setShowModal={setShowModal} />
          <Row title="Internalional TV Shows" setShowModal={setShowModal} />
          <Footer />
          
        </>
      ) : (
        <>
          <Header setSearch={setSearch} />
          <FilterData search={search} setShowModal={setShowModal} />
        </>
      )}
      {showModal && (
            <ModalWrap showModal={showModal} setShowModal={setShowModal} />
          )}
    </>
  );
}
