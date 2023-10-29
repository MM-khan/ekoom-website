import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  About Us
                </button>
              </h5>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                We are a turnkey company that helps our customers all year round as well as in the Stockholm region.
                Over the years, we have done a lot that we are proud of - But we continue to develop and ours
                knowledge and experience are enriched, all the time by varied assignments. We strive for consistent quality in
                our work, a high level of service and a sustainability perspective to reach a very good end result. In this
                there is of course a guarantee on our jobs and liability insurance. We protect quality and the environment. Listen to ours
                previous clients if you want references on previous jobs.
                Welcome to Ekoom!
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  GOALS & VISIONS
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                Eco is philosophy as well as company mission. Communicative harmony shapes corporate effectiveness;
                Ekoom is there when we are needed.
                Interaction is competitiveness, symbiosis is efficiency.
                A satisfied employee is an enterprising employee, a sustainable environment is a productive resource.
                We become an echo of your need - a natural response to your demand.
                We invest wholeheartedly in sustainability!
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Quality & the Environment Our guiding stars Responsiveness Long-term
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body">
                Our philosophy is to get satisfied customers with whom we can build long-term relationships. For us it is
                of course with a personal commitment to the contracts we carry out.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
