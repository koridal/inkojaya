import { Link } from 'react-router-dom';

const ServicesCard = () => {
	return (
		<section className="service-style-three pb-70">
      <div className="max-w-screen-xl mx-auto mb-10">
        < div className="grid grid-cols-1 px-4 sm:grid-cols-2 sm:gap-6">
          <div className="col-lg-2 col-sm-6">
            <div className="text-center service-card">
              <div className="service-img construction">
              </div>
              <div className="service-content">
                <img alt="city" src="/images/homeimage/city.svg" width={20} height={20} />
                <h3 className='text-[#1f1c0c]'>Construction</h3>
                <p className='text-[#1f1c0c]'>
									Construction design and building <br />
									Construction regulation review <br />
									Earthquake-proof and structure calculation <br />
									Maintenance
								</p>
                <Link to='/construction' className="service-btn">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="text-center service-card">
              <div className="service-img fire-fighting">
              </div>
              <div className="service-content">
                <img alt="fire-fighting" src="/images/homeimage/fire-fighting.svg" width={20} height={20}/>
                <h3 className='text-[#1f1c0c]'>Fire-fighting Equipment</h3>
                <p className='text-[#1f1c0c]'>
									Fire fighting facility design and construction <br />
									Fire fighting regulation review <br />
									Evacuation and rescue facilities <br />
									Maintenance
                </p>
                <Link to='/hydrant' className="service-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
				</div>
				< div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2">
          <div className="col-lg-2 col-sm-6">
            <div className="text-center service-card">
              <div className="service-img machinery">
              </div>
              <div className="service-content">
                <img alt="machine" src="/images/homeimage/machine.svg" width={20} height={20}/>
                <h3 className='text-[#1f1c0c]'>Machinery</h3>
                <p className='text-[#1f1c0c]'>
                  Machinery design and construction <br />
                  Machinery regulation review <br />
                  Selecting equipment for manufacturing process <br /> 
                  Maintenance 
                </p>
                <Link to='/machinery' className="service-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
					<div className="col-lg-4 col-sm-6">
            <div className="text-center service-card">
              <div className="service-img electric">
              </div>
              <div className="service-content">
                <img alt="s1" src="/images/homeimage/electric.svg" width={20} height={20}/>
                <h3 className='text-[#1f1c0c]'>Electrical Equipment</h3>
                <p className='text-[#1f1c0c]'>
                  Electrical facility design and construction <br /> 
                  Electrical regulation review <br /> 
                  Energy saving suggestion <br /> 
                  Maintenance 
                </p>
                <Link to='/electric' className="service-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
			</div>
    </section>
	);
};

export default ServicesCard;
