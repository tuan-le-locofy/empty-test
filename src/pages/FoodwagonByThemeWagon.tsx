import { FunctionComponent } from "react";
import styles from "./FoodwagonByThemeWagon.module.css";

const FoodwagonByThemeWagon: FunctionComponent = () => {
  return (
    <div className={styles.foodwagonByThemewagon}>
      <div className={styles.sections}>
        <div className={styles.topNavHeader}>
          <div className={styles.topNavHeaderChild} />
          <div className={styles.topNavHeaderItem} />
          <div className={styles.topNavHeaderInner} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-201@2x.png"
          />
          <div className={styles.header}>
            <img className={styles.group11} alt="" src="/group-1-1@2x.png" />
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.titleOrderCard}>
              <div className={styles.title}>
                <b className={styles.areYouStarving}>Are you starving?</b>
                <div className={styles.withinAFew}>
                  Within a few clicks, find meals that are accessible near you
                </div>
              </div>
              <div className={styles.orderCard}>
                <div className={styles.top}>
                  <div className={styles.tab1}>
                    <div className={styles.icon}>motorcycle</div>
                    <b className={styles.text}>Delivery</b>
                  </div>
                  <div className={styles.tab2}>
                    <div className={styles.icon1}>shopping-bag</div>
                    <b className={styles.text1}>Pickup</b>
                  </div>
                </div>
                <img className={styles.hrIcon} alt="" src="/hr.svg" />
                <div className={styles.bottom}>
                  <div className={styles.textFieldButton}>
                    <div className={styles.textField}>
                      <div className={styles.icon2}>map-marker-alt</div>
                      <div className={styles.text2}>Enter Your Address</div>
                    </div>
                    <div className={styles.button}>
                      <div className={styles.icon3}>SEARCH</div>
                      <b className={styles.text3}>Find Food</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.background} />
          <div className={styles.topNav}>
            <div className={styles.logo}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
              <div className={styles.foodParent}>
                <b className={styles.food}>food</b>
                <div className={styles.wagon}>
                  <span className={styles.wag}>
                    <b>wa</b>
                    <span className={styles.g}>G</span>
                  </span>
                  <b className={styles.on}>on</b>
                </div>
              </div>
            </div>
            <div className={styles.deliverAddress}>
              <b className={styles.deliverTo}>Deliver to:</b>
              <div className={styles.mapMarkerAltParent}>
                <div className={styles.mapMarkerAlt}>map-marker-alt</div>
                <div className={styles.currentLocationParent}>
                  <div className={styles.currentLocation}>Current Location</div>
                  <b className={styles.mohammadpurBusStand}>
                    Mohammadpur Bus Stand, Dhaka
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.searchLoginButton}>
              <div className={styles.searchParent}>
                <div className={styles.search}>Search</div>
                <b className={styles.searchFood}>Search Food</b>
              </div>
              <div className={styles.userParent}>
                <div className={styles.user}>user</div>
                <b className={styles.login}>Login</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flashDeals}>
          <div className={styles.flashDealCard}>
            <div className={styles.foodPhoto}>
              <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
              <div className={styles.discount}>
                <b className={styles.number}>15</b>
                <div className={styles.percentageSymbol}>
                  <b className={styles.b}>%</b>
                  <div className={styles.off}>Off</div>
                </div>
              </div>
            </div>
            <div className={styles.textsBadge}>
              <b className={styles.greysVage}>Greys Vage</b>
              <div className={styles.daysRemainingWrapper}>
                <b className={styles.daysRemaining}>6 Days Remaining</b>
              </div>
            </div>
          </div>
          <div className={styles.flashDealCard1}>
            <div className={styles.foodPhoto1}>
              <img className={styles.imageIcon2} alt="" src="/image2@2x.png" />
              <div className={styles.discount1}>
                <b className={styles.number1}>10</b>
                <div className={styles.percentageSymbol1}>
                  <b className={styles.b1}>%</b>
                  <div className={styles.off1}>Off</div>
                </div>
              </div>
            </div>
            <div className={styles.textsBadge1}>
              <b className={styles.greysVage1}>Greys Vage</b>
              <div className={styles.daysRemainingContainer}>
                <b className={styles.daysRemaining1}>6 Days Remaining</b>
              </div>
            </div>
          </div>
          <div className={styles.flashDealCard2}>
            <div className={styles.foodPhoto2}>
              <img className={styles.imageIcon3} alt="" src="/image3@2x.png" />
              <div className={styles.discount2}>
                <b className={styles.number2}>25</b>
                <div className={styles.percentageSymbol2}>
                  <b className={styles.b2}>%</b>
                  <div className={styles.off2}>Off</div>
                </div>
              </div>
            </div>
            <div className={styles.textsBadge2}>
              <b className={styles.greysVage2}>Greys Vage</b>
              <div className={styles.daysRemainingFrame}>
                <b className={styles.daysRemaining2}>7 Days Remaining</b>
              </div>
            </div>
          </div>
          <div className={styles.flashDealCard3}>
            <div className={styles.foodPhoto3}>
              <img className={styles.imageIcon4} alt="" src="/image4@2x.png" />
              <div className={styles.discount3}>
                <b className={styles.number3}>20</b>
                <div className={styles.percentageSymbol3}>
                  <b className={styles.b3}>%</b>
                  <div className={styles.off3}>Off</div>
                </div>
              </div>
            </div>
            <div className={styles.textsBadge3}>
              <b className={styles.greysVage3}>Greys Vage</b>
              <div className={styles.frameDiv}>
                <b className={styles.daysRemaining3}>8 Days Remaining</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.howDoesItWork}>
          <b className={styles.title1}>How does it work</b>
          <div className={styles.features}>
            <div className={styles.iconsParent}>
              <div className={styles.icons}>
                <div className={styles.menu}>
                  <div className={styles.menu2}>
                    <div className={styles.menu2Child} />
                    <img className={styles.groupIcon} alt="" src="/group.svg" />
                  </div>
                </div>
                <div className={styles.wrapperMapMarker}>
                  <img
                    className={styles.mapMarkerIcon}
                    alt=""
                    src="/map-marker.svg"
                  />
                </div>
                <img className={styles.invoiceIcon} alt="" src="/invoice.svg" />
                <img className={styles.donutIcon} alt="" />
              </div>
              <div className={styles.texts}>
                <b className={styles.title2}>Select location</b>
                <div className={styles.body}>
                  Choose the location where your food will be delivered.
                </div>
              </div>
            </div>
            <div className={styles.iconsGroup}>
              <div className={styles.icons1}>
                <div className={styles.menu1}>
                  <div className={styles.menu21}>
                    <div className={styles.menu2Item} />
                    <img
                      className={styles.groupIcon1}
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                </div>
                <img className={styles.mapMarkerIcon1} alt="" />
                <img
                  className={styles.invoiceIcon1}
                  alt=""
                  src="/invoice.svg"
                />
                <img className={styles.donutIcon1} alt="" />
              </div>
              <div className={styles.texts1}>
                <b className={styles.title3}>Choose order</b>
                <div className={styles.body1}>
                  Check over hundreds of menus to pick your favorite food
                </div>
              </div>
            </div>
            <div className={styles.iconsContainer}>
              <div className={styles.icons2}>
                <div className={styles.menu3}>
                  <div className={styles.menu22}>
                    <div className={styles.menu2Inner} />
                    <img
                      className={styles.groupIcon2}
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                </div>
                <img className={styles.mapMarkerIcon2} alt="" />
                <div className={styles.wrapperInvoice}>
                  <img
                    className={styles.invoiceIcon2}
                    alt=""
                    src="/invoice.svg"
                  />
                </div>
                <img className={styles.donutIcon2} alt="" />
              </div>
              <div className={styles.texts2}>
                <b className={styles.title4}>Pay advanced</b>
                <div className={styles.body2}>
                  It's quick, safe, and simple. Select several methods of
                  payment
                </div>
              </div>
            </div>
            <div className={styles.iconsParent1}>
              <div className={styles.icons3}>
                <div className={styles.menu4}>
                  <div className={styles.menu23}>
                    <div className={styles.rectangleDiv} />
                    <img
                      className={styles.groupIcon3}
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                </div>
                <img className={styles.mapMarkerIcon3} alt="" />
                <img
                  className={styles.invoiceIcon3}
                  alt=""
                  src="/invoice.svg"
                />
                <div className={styles.wrapperDonut}>
                  <img className={styles.donutIcon3} alt="" src="/donut.svg" />
                </div>
              </div>
              <div className={styles.texts3}>
                <b className={styles.title5}>Enjoy meals</b>
                <div className={styles.body3}>
                  Food is made and delivered directly to your home.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.popularItems}>
          <div className={styles.titleCards}>
            <b className={styles.title6}>Popular items</b>
            <div className={styles.cards}>
              <div className={styles.div}>
                <div className={styles.imageTitle}>
                  <img
                    className={styles.imageTitleChild}
                    alt=""
                    src="/frame-40@2x.png"
                  />
                  <div className={styles.nameLocationPrice}>
                    <div className={styles.nameLocation}>
                      <b className={styles.name}>Cheese Burger</b>
                      <div className={styles.location}>
                        <div className={styles.icon4}>map-marker-alt</div>
                        <div className={styles.text4}>Burger Arena</div>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <b className={styles.b4}>$3.88</b>
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
                  <b className={styles.text5}>Order Now</b>
                </div>
              </div>
              <div className={styles.div1}>
                <div className={styles.imageTitle1}>
                  <img
                    className={styles.imageTitleItem}
                    alt=""
                    src="/frame-401@2x.png"
                  />
                  <div className={styles.nameLocationPrice1}>
                    <div className={styles.nameLocation1}>
                      <b className={styles.name1}>Toffe’s Cake</b>
                      <div className={styles.location1}>
                        <div className={styles.icon5}>map-marker-alt</div>
                        <div className={styles.text6}>Top Sticks</div>
                      </div>
                    </div>
                    <div className={styles.price1}>
                      <b className={styles.b5}>$4.00</b>
                    </div>
                  </div>
                </div>
                <div className={styles.button2}>
                  <b className={styles.text7}>Order Now</b>
                </div>
              </div>
              <div className={styles.div2}>
                <div className={styles.imageTitle2}>
                  <img
                    className={styles.imageTitleInner}
                    alt=""
                    src="/frame-402@2x.png"
                  />
                  <div className={styles.nameLocationPrice2}>
                    <div className={styles.nameLocation2}>
                      <b className={styles.name2}>Dancake</b>
                      <div className={styles.location2}>
                        <div className={styles.icon6}>map-marker-alt</div>
                        <div className={styles.text8}>Cake World</div>
                      </div>
                    </div>
                    <div className={styles.price2}>
                      <b className={styles.b6}>$1.99</b>
                    </div>
                  </div>
                </div>
                <div className={styles.button3}>
                  <b className={styles.text9}>Order Now</b>
                </div>
              </div>
              <div className={styles.div3}>
                <div className={styles.imageTitle3}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-403@2x.png"
                  />
                  <div className={styles.nameLocationPrice3}>
                    <div className={styles.nameLocation3}>
                      <b className={styles.name3}>Crispy Sandwitch</b>
                      <div className={styles.location3}>
                        <div className={styles.icon7}>map-marker-alt</div>
                        <div className={styles.text10}>Fastfood Dine</div>
                      </div>
                    </div>
                    <div className={styles.price3}>
                      <b className={styles.b7}>$3.00</b>
                    </div>
                  </div>
                </div>
                <div className={styles.button4}>
                  <b className={styles.text11}>Order Now</b>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.imageTitle4}>
                  <img
                    className={styles.imageTitleChild1}
                    alt=""
                    src="/frame-404@2x.png"
                  />
                  <div className={styles.nameLocationPrice4}>
                    <div className={styles.nameLocation4}>
                      <b className={styles.name4}>Thai Soup</b>
                      <div className={styles.location4}>
                        <div className={styles.icon8}>map-marker-alt</div>
                        <div className={styles.text12}>Foody man</div>
                      </div>
                    </div>
                    <div className={styles.price4}>
                      <b className={styles.b8}>$2.79</b>
                    </div>
                  </div>
                </div>
                <div className={styles.button5}>
                  <b className={styles.text13}>Order Now</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sliderButton}>
            <div className={styles.arrowLeft}>
              <div className={styles.icon9}>chevron-left</div>
            </div>
            <div className={styles.arrowRight}>
              <div className={styles.icon10}>chevron-right</div>
            </div>
          </div>
        </div>
        <div className={styles.featuredRestaurant}>
          <b className={styles.title7}>Featured Restaurants</b>
          <div className={styles.cards1}>
            <div className={styles.top1}>
              <div className={styles.div5}>
                <div className={styles.foodPhoto4}>
                  <img
                    className={styles.imageIcon5}
                    alt=""
                    src="/image5@2x.png"
                  />
                  <div className={styles.badge}>
                    <div className={styles.discount4}>
                      <div className={styles.icon11}>tag</div>
                      <b className={styles.text14}>20% off</b>
                    </div>
                    <div className={styles.fast}>
                      <div className={styles.icon12}>clock</div>
                      <b className={styles.text15}>Fast</b>
                    </div>
                  </div>
                </div>
                <div className={styles.imageNameReviewBadge}>
                  <div className={styles.imageNameReview}>
                    <img
                      className={styles.restaruantLogoIcon}
                      alt=""
                      src="/restaruant-logo@2x.png"
                    />
                    <div className={styles.nameReview}>
                      <b className={styles.name5}>Foodworld</b>
                      <div className={styles.review}>
                        <div className={styles.icon13}>Star</div>
                        <div className={styles.text16}>46</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge1}>
                    <b className={styles.text17}>Opens tomorrow</b>
                  </div>
                </div>
              </div>
              <div className={styles.div6}>
                <div className={styles.foodPhoto5}>
                  <img
                    className={styles.imageIcon6}
                    alt=""
                    src="/image6@2x.png"
                  />
                  <div className={styles.badge2}>
                    <div className={styles.discount5}>
                      <div className={styles.icon14}>tag</div>
                      <b className={styles.text18}>15% off</b>
                    </div>
                    <div className={styles.fast1}>
                      <div className={styles.icon15}>clock</div>
                      <b className={styles.text19}>Fast</b>
                    </div>
                  </div>
                </div>
                <div className={styles.imageNameReviewBadge1}>
                  <div className={styles.imageNameReview1}>
                    <img
                      className={styles.restaruantLogoIcon1}
                      alt=""
                      src="/restaruant-logo1@2x.png"
                    />
                    <div className={styles.nameReview1}>
                      <b className={styles.name6}>Pizzahub</b>
                      <div className={styles.review1}>
                        <div className={styles.icon16}>Star</div>
                        <div className={styles.text20}>40</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge3}>
                    <b className={styles.text21}>Opens tomorrow</b>
                  </div>
                </div>
              </div>
              <div className={styles.div7}>
                <div className={styles.foodPhoto6}>
                  <img
                    className={styles.imageIcon7}
                    alt=""
                    src="/image7@2x.png"
                  />
                  <div className={styles.badge4}>
                    <div className={styles.discount6}>
                      <div className={styles.icon17}>tag</div>
                      <b className={styles.text22}>10% off</b>
                    </div>
                    <div className={styles.fast2}>
                      <div className={styles.icon18}>clock</div>
                      <b className={styles.text23}>Fast</b>
                    </div>
                  </div>
                </div>
                <div className={styles.imageNameReviewBadge2}>
                  <div className={styles.imageNameReview2}>
                    <img
                      className={styles.restaruantLogoIcon2}
                      alt=""
                      src="/restaruant-logo2@2x.png"
                    />
                    <div className={styles.nameReview2}>
                      <b className={styles.name7}>Donuts hut</b>
                      <div className={styles.review2}>
                        <div className={styles.icon19}>Star</div>
                        <div className={styles.text24}>20</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge5}>
                    <b className={styles.text25}>Open Now</b>
                  </div>
                </div>
              </div>
              <div className={styles.div8}>
                <div className={styles.foodPhoto7}>
                  <img
                    className={styles.imageIcon8}
                    alt=""
                    src="/image8@2x.png"
                  />
                  <div className={styles.badge6}>
                    <div className={styles.discount7}>
                      <div className={styles.icon20}>tag</div>
                      <b className={styles.text26}>15% off</b>
                    </div>
                    <div className={styles.fast3}>
                      <div className={styles.icon21}>clock</div>
                      <b className={styles.text27}>Fast</b>
                    </div>
                  </div>
                </div>
                <div className={styles.imageNameReviewBadge3}>
                  <div className={styles.imageNameReview3}>
                    <img
                      className={styles.restaruantLogoIcon3}
                      alt=""
                      src="/restaruant-logo3@2x.png"
                    />
                    <div className={styles.nameReview3}>
                      <b className={styles.name8}>Donuts hut</b>
                      <div className={styles.review3}>
                        <div className={styles.icon22}>Star</div>
                        <div className={styles.text28}>50</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge7}>
                    <b className={styles.text29}>Open Now</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottom1}>
              <div className={styles.div9}>
                <div className={styles.foodPhoto8}>
                  <img
                    className={styles.imageIcon9}
                    alt=""
                    src="/image9@2x.png"
                  />
                  <div className={styles.badge8}>
                    <div className={styles.discount8}>
                      <div className={styles.icon23}>tag</div>
                      <b className={styles.text30}>10% off</b>
                    </div>
                    <div className={styles.fast4}>
                      <div className={styles.icon24}>clock</div>
                      <b className={styles.text31}>Fast</b>
                    </div>
                  </div>
                </div>
                <div className={styles.imageNameReviewBadge4}>
                  <div className={styles.imageNameReview4}>
                    <img
                      className={styles.restaruantLogoIcon4}
                      alt=""
                      src="/restaruant-logo4@2x.png"
                    />
                    <div className={styles.nameReview4}>
                      <b className={styles.name9}>Ruby Tuesday</b>
                      <div className={styles.review4}>
                        <div className={styles.icon25}>Star</div>
                        <div className={styles.text32}>26</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge9}>
                    <b className={styles.text33}>Open Now</b>
                  </div>
                </div>
              </div>
              <div className={styles.div10}>
                <div className={styles.foodPhoto9}>
                  <img
                    className={styles.imageIcon10}
                    alt=""
                    src="/image10@2x.png"
                  />
                  <div className={styles.badge10}>
                    <div className={styles.discount9}>
                      <div className={styles.icon26}>tag</div>
                      <b className={styles.text34}>25% off</b>
                    </div>
                    <div className={styles.fast5}>
                      <div className={styles.icon27}>clock</div>
                      <b className={styles.text35}>Fast</b>
                    </div>
                  </div>
                </div>
                <div className={styles.imageNameReviewBadge5}>
                  <div className={styles.imageNameReview5}>
                    <img
                      className={styles.restaruantLogoIcon5}
                      alt=""
                      src="/restaruant-logo5@2x.png"
                    />
                    <div className={styles.nameReview5}>
                      <b className={styles.name10}>Kuakata Fried Chicken</b>
                      <div className={styles.review5}>
                        <div className={styles.icon28}>Star</div>
                        <div className={styles.text36}>53</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge11}>
                    <b className={styles.text37}>Open Now</b>
                  </div>
                </div>
              </div>
              <div className={styles.div11}>
                <div className={styles.foodPhoto10}>
                  <img
                    className={styles.imageIcon11}
                    alt=""
                    src="/image11@2x.png"
                  />
                  <div className={styles.badge12}>
                    <div className={styles.discount10}>
                      <div className={styles.icon29}>tag</div>
                      <b className={styles.text38}>10% off</b>
                    </div>
                    <div className={styles.fast6}>
                      <div className={styles.icon30}>clock</div>
                      <b className={styles.text39}>Fast</b>
                    </div>
                  </div>
                </div>
                <div className={styles.imageNameReviewBadge6}>
                  <div className={styles.imageNameReview6}>
                    <img
                      className={styles.restaruantLogoIcon6}
                      alt=""
                      src="/restaruant-logo6@2x.png"
                    />
                    <div className={styles.nameReview6}>
                      <b className={styles.name11}>Red Square</b>
                      <div className={styles.review6}>
                        <div className={styles.icon31}>Star</div>
                        <div className={styles.text40}>45</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge13}>
                    <b className={styles.text41}>Open Now</b>
                  </div>
                </div>
              </div>
              <div className={styles.div12}>
                <div className={styles.foodPhoto11}>
                  <img
                    className={styles.imageIcon12}
                    alt=""
                    src="/image12@2x.png"
                  />
                  <div className={styles.badge14}>
                    <div className={styles.discount11}>
                      <div className={styles.icon32}>tag</div>
                      <b className={styles.text42}>10% off</b>
                    </div>
                    <div className={styles.fast7}>
                      <div className={styles.icon33}>clock</div>
                      <b className={styles.text43}>Fast</b>
                    </div>
                  </div>
                </div>
                <div className={styles.imageNameReviewBadge7}>
                  <div className={styles.imageNameReview7}>
                    <img
                      className={styles.restaruantLogoIcon7}
                      alt=""
                      src="/restaruant-logo7@2x.png"
                    />
                    <div className={styles.nameReview7}>
                      <b className={styles.name12}>Taco Bell</b>
                      <div className={styles.review7}>
                        <div className={styles.icon34}>Star</div>
                        <div className={styles.text44}>35</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge15}>
                    <b className={styles.text45}>Open Now</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.button6}>
            <b className={styles.text46}>View All</b>
            <div className={styles.icon35}>CHEVRON-RIGHT</div>
          </div>
        </div>
        <div className={styles.searchByFoodFeaturesAp}>
          <div className={styles.searchByFoodThisIsALong}>
            <div className={styles.titleItemsButton}>
              <div className={styles.header1}>
                <b className={styles.title8}>Search by Food</b>
                <div className={styles.buttons}>
                  <div className={styles.button7}>
                    <b className={styles.viewAll}>View All</b>
                    <div className={styles.icon36}>CHEVRON-RIGHT</div>
                  </div>
                  <div className={styles.sliderButton1}>
                    <div className={styles.arrowLeft1}>
                      <div className={styles.icon37}>chevron-left</div>
                    </div>
                    <div className={styles.arrowRight1}>
                      <div className={styles.icon38}>chevron-right</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.div13}>
                  <img
                    className={styles.foodPhotoIcon}
                    alt=""
                    src="/food-photo@2x.png"
                  />
                  <b className={styles.name13}>Pizza</b>
                </div>
                <div className={styles.div14}>
                  <img
                    className={styles.foodPhotoIcon1}
                    alt=""
                    src="/food-photo1@2x.png"
                  />
                  <b className={styles.name14}>Burger</b>
                </div>
                <div className={styles.div15}>
                  <img
                    className={styles.foodPhotoIcon2}
                    alt=""
                    src="/food-photo2@2x.png"
                  />
                  <b className={styles.name15}>Noodles</b>
                </div>
                <div className={styles.div16}>
                  <img
                    className={styles.foodPhotoIcon3}
                    alt=""
                    src="/food-photo3@2x.png"
                  />
                  <b className={styles.name16}>Sub-sandiwch</b>
                </div>
                <div className={styles.div17}>
                  <img
                    className={styles.foodPhotoIcon4}
                    alt=""
                    src="/food-photo4@2x.png"
                  />
                  <b className={styles.name17}>Chowmein</b>
                </div>
                <div className={styles.div18}>
                  <img
                    className={styles.foodPhotoIcon5}
                    alt=""
                    src="/food-photo5@2x.png"
                  />
                  <b className={styles.name18}>Steak</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.features1}>
            <div className={styles.card}>
              <div className={styles.div19}>
                <img className={styles.icon39} alt="" src="/icon3.svg" />
                <b className={styles.text47}>
                  <p className={styles.daily}>Daily</p>
                  <p className={styles.discounts}>Discounts</p>
                </b>
              </div>
              <img className={styles.hrIcon1} alt="" src="/hr1.svg" />
              <div className={styles.div20}>
                <img className={styles.icon40} alt="" src="/icon4.svg" />
                <b className={styles.text48}>
                  <p className={styles.live}>Live</p>
                  <p className={styles.tracing}>Tracing</p>
                </b>
              </div>
              <img className={styles.hrIcon2} alt="" src="/hr1.svg" />
              <div className={styles.div21}>
                <img className={styles.icon41} alt="" src="/icon5.svg" />
                <b className={styles.text49}>
                  <p className={styles.quick}>Quick</p>
                  <p className={styles.delivery}>Delivery</p>
                </b>
              </div>
            </div>
          </div>
          <div className={styles.appDownload}>
            <div className={styles.background1} />
            <div className={styles.textButton}>
              <div className={styles.text50}>
                <b className={styles.title9}>Install the app</b>
                <div className={styles.body4}>
                  It's never been easier to order food. Look for the finest
                  discounts and you'll be lost in a world of delectable food.
                </div>
              </div>
              <div className={styles.button8}>
                <div className={styles.wrapperGooglePlayDownload}>
                  <img
                    className={styles.googlePlayDownload}
                    alt=""
                    src="/google-play-download@2x.png"
                  />
                </div>
                <div className={styles.wrapperAppStoreDownloadBut}>
                  <img
                    className={styles.appStoreDownloadButton}
                    alt=""
                    src="/app-store-download-button.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.wrapperImage}>
              <img
                className={styles.imageIcon13}
                alt=""
                src="/image13@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsCard}>
            <div className={styles.left}>
              <div className={styles.text51}>
                <b className={styles.title10}>
                  <span>{`Best deals `}</span>
                  <span className={styles.crispySandwiches}>
                    Crispy Sandwiches
                  </span>
                </b>
                <div className={styles.body5}>
                  <p
                    className={styles.enjoyTheLarge}
                  >{`Enjoy the large size of sandwiches. Complete `}</p>
                  <p className={styles.perfectSliceOf}>
                    perfect slice of sandwiches.
                  </p>
                </div>
              </div>
              <div className={styles.button9}>
                <div className={styles.proceedToOrder}>Proceed to order</div>
                <div className={styles.chevronRight}>CHEVRON-RIGHT</div>
              </div>
            </div>
            <img className={styles.rightIcon} alt="" src="/right@2x.png" />
          </div>
          <div className={styles.detailsCard1}>
            <img className={styles.rightIcon1} alt="" src="/right1@2x.png" />
            <div className={styles.left1}>
              <div className={styles.text52}>
                <b className={styles.title11}>
                  <p className={styles.celebrateParties}>Celebrate parties</p>
                  <p className={styles.withFriedChicken}>
                    <span>{`with `}</span>
                    <span className={styles.friedChicken}>Fried Chicken</span>
                  </p>
                </b>
                <div className={styles.body6}>
                  <p
                    className={styles.getTheBest}
                  >{`Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out `}</p>
                  <p className={styles.bestDealsFor}>
                    best deals for fried chicken.
                  </p>
                </div>
              </div>
              <div className={styles.button10}>
                <b className={styles.text53}>Proceed to order</b>
                <div className={styles.icon42}>CHEVRON-RIGHT</div>
              </div>
            </div>
          </div>
          <div className={styles.detailsCard2}>
            <div className={styles.left2}>
              <div className={styles.text54}>
                <b className={styles.title12}>
                  <p className={styles.wannaEatHot}>{`Wanna eat hot `}</p>
                  <p className={styles.spicyPizza}>
                    <span>{`& spicy `}</span>
                    <span className={styles.pizza}>Pizza?</span>
                  </p>
                </b>
                <div className={styles.body7}>
                  <p
                    className={styles.pairUpWith}
                  >{`Pair up with a friend and enjoy the `}</p>
                  <p
                    className={styles.hotAndCrispy}
                  >{`hot and crispy pizza pops. Try it `}</p>
                  <p className={styles.withTheBest}>with the best deals.</p>
                </div>
              </div>
              <div className={styles.button11}>
                <div className={styles.proceedToOrder1}>Proceed to order</div>
                <div className={styles.chevronRight1}>CHEVRON-RIGHT</div>
              </div>
            </div>
            <img className={styles.rightIcon2} alt="" src="/right2@2x.png" />
          </div>
        </div>
        <div className={styles.ctaFooter}>
          <div className={styles.cta}>
            <img className={styles.imageIcon14} alt="" src="/image14@2x.png" />
            <div className={styles.textButton1}>
              <div className={styles.text55}>
                Are you ready to order with the best deals?
              </div>
              <div className={styles.button12}>
                <div className={styles.text56}>Proceed to order</div>
                <div className={styles.icon43}>CHEVRON-RIGHT</div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.ourTopCities}>
              <b className={styles.title13}>Our top cities</b>
              <div className={styles.items1}>
                <div className={styles.ourTopCitiesMenuItems1}>
                  <div className={styles.div22}>San Francisco</div>
                  <div className={styles.div23}>Miami</div>
                  <div className={styles.div24}>San Diego</div>
                  <div className={styles.div25}>East Bay</div>
                  <div className={styles.div26}>Long Beach</div>
                </div>
                <div className={styles.ourTopCitiesMenuItems2}>
                  <div className={styles.div27}>Los Angeles</div>
                  <div className={styles.div28}>Washington DC</div>
                  <div className={styles.div29}>Seattle</div>
                  <div className={styles.div30}>Portland</div>
                  <div className={styles.div31}>Nashville</div>
                </div>
                <div className={styles.ourTopCitiesMenuItems3}>
                  <div className={styles.div32}>New York City</div>
                  <div className={styles.div33}>Orange County</div>
                  <div className={styles.div34}>Atlanta</div>
                  <div className={styles.div35}>Charlotte</div>
                  <div className={styles.div36}>Denver</div>
                </div>
                <div className={styles.ourTopCitiesMenuItems4}>
                  <div className={styles.div37}>Chicago</div>
                  <div className={styles.div38}>Phoenix</div>
                  <div className={styles.div39}>Las Vegas</div>
                  <div className={styles.div40}>Sacramento</div>
                  <div className={styles.div41}>Oklahoma City</div>
                </div>
                <div className={styles.ourTopCitiesMenuItems5}>
                  <div className={styles.div42}>Columbus</div>
                  <div className={styles.div43}>New Mexico</div>
                  <div className={styles.div44}>Albuquerque</div>
                  <div className={styles.div45}>Sacramento</div>
                  <div className={styles.div46}>New Orleans</div>
                </div>
              </div>
            </div>
            <div className={styles.menuSubscriptionRights}>
              <img className={styles.hrIcon3} alt="" src="/hr2.svg" />
              <div className={styles.menuSubscription}>
                <div className={styles.menu5}>
                  <div className={styles.footerMenuItems}>
                    <b className={styles.title14}>Company</b>
                    <div className={styles.items2}>
                      <div className={styles.div47}>About us</div>
                      <div className={styles.div48}>Team</div>
                      <div className={styles.div49}>Careers</div>
                      <div className={styles.div50}>Blog</div>
                    </div>
                  </div>
                  <div className={styles.footerMenuItems1}>
                    <b className={styles.title15}>Contact</b>
                    <div className={styles.items3}>
                      <div className={styles.div51}>{`Help & Support`}</div>
                      <div className={styles.div52}>{`Partner with us `}</div>
                      <div className={styles.div53}>Ride with us</div>
                      <div className={styles.div54}>Blog</div>
                    </div>
                  </div>
                  <div className={styles.footerMenuItems2}>
                    <b className={styles.title16}>Legal</b>
                    <div className={styles.items4}>
                      <div className={styles.div55}>{`Terms & Conditions`}</div>
                      <div
                        className={styles.div56}
                      >{`Refund & Cancellation`}</div>
                      <div className={styles.div57}>Privacy Policy</div>
                      <div className={styles.div58}>Cookie Policy</div>
                    </div>
                  </div>
                </div>
                <div className={styles.followSubscription}>
                  <div className={styles.followUs}>
                    <b className={styles.title17}>Follow Us</b>
                    <div className={styles.icons4}>
                      <div className={styles.div59}></div>
                      <div className={styles.div60}></div>
                      <div className={styles.div61}></div>
                    </div>
                  </div>
                  <div className={styles.subscription}>
                    <b className={styles.text57}>
                      Receive exclusive offers in your mailbox
                    </b>
                    <div className={styles.textFieldButton1}>
                      <div className={styles.textField1}>
                        <div className={styles.envelope}>envelope</div>
                        <div className={styles.text58}>Enter Your email</div>
                      </div>
                      <div className={styles.button13}>
                        <b className={styles.subscribe}>Subscribe</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.hrRights}>
                <img className={styles.hrIcon4} alt="" src="/hr2.svg" />
                <div className={styles.rights}>
                  <div className={styles.rights1}>
                    <div className={styles.copyright}>
                      <div className={styles.allRightsReserved}>
                        All rights Reserved
                      </div>
                      <div className={styles.symbol}>copyright</div>
                    </div>
                    <div className={styles.company}>
                      <b className={styles.yourCompany2021}>
                        Your Company, 2021
                      </b>
                    </div>
                  </div>
                  <div className={styles.madeBy}>
                    <div className={styles.madeWithContainer}>
                      <span>
                        <span>Made with</span>
                        <span className={styles.span}>{` `}</span>
                      </span>
                      <span className={styles.span1}>
                        <span></span>
                        <span className={styles.span2}>{` `}</span>
                      </span>
                      <span>by</span>
                    </div>
                    <div className={styles.themewagon}>
                      <b className={styles.themewagon1}>Themewagon</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodwagonByThemeWagon;
