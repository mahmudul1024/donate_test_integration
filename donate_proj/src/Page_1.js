import React from 'react'

const Page_1 = () => {
  return (
    <>
    <section className='front_page'>
      <div className='background_1'> </div>
      <div className='text_box_1'>
      <h1 className='main_heading'>Let's take responsibility! </h1>
        <p className='first_para'> Massive floods, collapsed houses, missing and dead people: Severe storms and heavy rainfalls have left widespread destruction in Bangladesh</p>
        <button className='donate_now_btn'>Donate Now</button>
      </div>
      





    </section >
    <section >
    <div className='textbox_2'>
        <h1>Donate Today</h1>
        <p className='first_para'>We need your help to support the evacuation of affected families and secure dangerous areas</p>

        


        <div className='rectangle_container'>
            <div className='rec_text'>
                <p>1000tk</p>
            </div>
            <div className='rec_text'>
                <p>2000tk</p>
            </div>
            <div className='rec_text'>
                <p>3000tk</p>
            </div>
            <div className='rec_text'>
                <p>500tk</p>
            </div>
            <div className='rec_text'>
                <p>1000tk</p>
            </div>
        

        </div>

        <form>

<input className='text' type={"text"} placeholder="Other Amount (Taka)"></input>
    </form>
    <button className='donate_now_btn'>Donate Now</button>
    </div>

    
    
    </section>





    <section className='Donate_plan_container'>
        <h1 className='Donate_plan_header'>Our Donate Plan</h1>
        <p className='Donate_plan_para first_para'>organize accommodation for people who no longer have a home ,help with the clean-up work and provide construction dryers ,support people with cash so that they can get their bare minimums</p>

        <div className='Donate_Rectangle_Container'>
            <div className='donate_rectangle'>
                <div className='image_icon'>
                <div className='shift_left_image'>
                <img src='/icons/food.png' ></img>
                </div>
                <div className='shift_text'></div>
                </div>
                <div className='text2'>
                <h1>Food for a family</h1>
                </div>
                <p className='text3'>distribute food and hygiene kits to people in emergency shelters. </p>
                

                

            </div>


            <div className='donate_rectangle'>
                <div className='image_icon'>
                <div className='shift_left_image'>
                <img src='/icons/shelter.png' ></img>
                </div>
                <div className='shift_text'></div>
                </div>
                <div className='text2'>
                <h1>Shelter for a family</h1>
                </div>
                <p className='text3'>support the evacuation of affected families.help with the clean-up work and provide construction dryers</p>
                

                

            </div>

            <div className='donate_rectangle'>
                <div className='image_icon'>
                <div className='shift_left_image'>
                <img src='/icons/Frame-1.png' ></img>
                </div>
                <div className='shift_text'></div>
                </div>
                <div className='text2'>
                <h1>Education for a child</h1>
                </div>
                <p className='text3'>support children and adults with psycho-social care.take care of emergency services on-site</p>
                

                

            </div>


        </div>
    </section>


    <section className='section3'>
    <dev className="left">
        <h1 className='lives_heading'>Their lives depend on your donation</h1>
        <p className='first_para'>People wishing to donate goods or offer financial support can donate or pledge goods through national non-for-profit organisation.</p>
        <button className='text_btn2'>How to Contribute?</button>

    </dev>
    <dev className="right">
        <div >
        <img className='image_last' src='/images/donation12.png' ></img>
        </div>

    </dev>

    </section>


    <section className='section3 reverse'>
    <dev className="left">
        <h1 className='lives_heading'>They need us
to suvive</h1>
        <p className='first_para'>Sylhet communities affected by recent storms and floods urgently need help.

If you wish to contribute, it is vital that you don't hinder recovery efforts by dropping unrequested donations into the affected areas.  </p>

        <button className='text_btn2'>How to Contribute?</button>

    </dev>
    <dev className="right">
        <div >
        <img className='image_last' src='/images/donation12.png' ></img>
        </div>

    </dev>

    </section>

    <section className='last_container'>
    <h1 className='last_heading'>Get My Updates</h1>
    <p>asks for your donation for the River Floods in Bangladesh</p>

    <div className='set_box'>
        <form className='form_set'>
        <input className='email_field' type={"email"} placeholder="Email"></input>
        <button className='last_btn' type={"submit"}>Subscribe</button>
        </form>
    </div>

    <footer className='footer_container'>
    <h2 className='footer_header'>Be Humble</h2>
        <p>I’m gonna do it</p>

    </footer >
        

    </section>


   

    

    </>
  )
}

export default Page_1
