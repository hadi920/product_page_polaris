import React, { useCallback, useRef, useState } from "react";
import "@shopify/polaris/build/esm/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftMinor, ChevronRightMinor } from "@shopify/polaris-icons";
import {
  Stack,
  Box,
  Text,
  Inline,
  List,
  Select,
  Button,
  Icon,
} from "@shopify/polaris";
import "./ProductDetailsPage.css";
import productImage from "../../assets/product.png";

const ProductDetailsPage = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selected, setSelected] = useState("Variants - As pic/ L /China");
  const [quantity, setQuantity] = useState(0);
  const handleSelectChange = useCallback((value) => setSelected(value), []);

  function incremnet() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const next = () => {
    if (currentSlide < products.length - 1) {
      sliderRef.current.slickNext();
      setCurrentSlide(currentSlide + 1);
      console.log(currentSlide);
    }
  };

  const previous = () => {
    if (currentSlide > 0) {
      sliderRef.current.slickPrev();
      setCurrentSlide(currentSlide - 1);
      console.log(currentSlide);
    }
  };

  const products = [
    {
      id: 1,
      image: productImage,
      title: "Animal Graphic T-Shirt",
      discountedPrice: 16.0,
      originalPrice: 24.0,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Recusandae, quae!",
      savings: 10,
      options: [
        { label: "Variants - As pic/ XL /China", value: "XL" },
        { label: "Variants - As pic/ M /China", value: "M" },
        { label: "Variants - As pic/ S /China", value: "S" },
        { label: "Variants - As pic/ L /China", value: "L" },
      ],
      variants: [
        "Solid Shirt with Pant Jacket",
        "Blue Pant with pant jacket",
        "Blue Blazer with Pant Jacket",
        "Blue Blazer with Pant Jacket",
      ],
    },
    {
      id: 2,
      image: productImage,
      title: "Blue Graphic T-Shirt",
      discountedPrice: 10.0,
      originalPrice: 20.0,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Recusandae, quae!",
      savings: 20,
      options: [
        { label: "Variants - As pic/ XL /China", value: "XL" },
        { label: "Variants - As pic/ M /China", value: "M" },
        { label: "Variants - As pic/ S /China", value: "S" },
        { label: "Variants - As pic/ L /China", value: "L" },
      ],
      variants: [
        "Solid Shirt with Pant Jacket",
        "Blue Pant with pant jacket",
        "Blue Blazer with Pant Jacket",
        "Blue Blazer with Pant Jacket",
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };
  return (
    <>
      <div className="container">
        <Box width="100%">
          <Stack vertical width="70%">
            <Stack.Item>
              <Box width="100%">
                <div className="buttons">
                  <div className="prevBtn">
                    <Icon source={ChevronLeftMinor} />
                    <Button plain removeUnderline onClick={previous}>
                      <Text variant="headingMd" as="h5">
                        Previous Offer
                      </Text>
                    </Button>
                  </div>
                  <div className="nextBtn">
                    <Button plain removeUnderline onClick={next}>
                      <Text variant="headingMd" as="h5">
                        Next Offer
                      </Text>
                    </Button>
                    <Icon source={ChevronRightMinor} />
                  </div>
                </div>
                <div className="pagination">
                  {products.map((ele, index) => {
                    return <span key={index} className="page"></span>;
                  })}
                </div>
              </Box>
            </Stack.Item>
            <Stack.Item>
              <Box width="100%">
                <Inline align="center">
                  <Text variant="heading3xl" as="h1" fontWeight="bold">
                    Upgrade Your Cart Now
                  </Text>
                </Inline>
              </Box>
            </Stack.Item>
            <Stack.Item>
              <div className="offerHeading">
                <Box padding="4" width="100%">
                  <Inline align="center">
                    <Text variant="headingLg" as="h5">
                      Special Offer
                    </Text>
                  </Inline>
                </Box>
              </div>
            </Stack.Item>
            <Slider ref={sliderRef} {...settings}>
              {products.map((product, index) => {
                return (
                  <Stack.Item key={index}>
                    <div className="content">
                      <div className="productImage">
                        <Box padding="4" width="100%">
                          <img
                            className="image"
                            src={product.image}
                            alt={product.title}
                          />
                        </Box>
                      </div>
                      <div className="productDetails">
                        <Box padding="4" width="100%">
                          <Text variant="headingLg" as="h5" fontWeight="bold">
                            {product.title}
                          </Text>

                          <div className="price">
                            <Text variant="headingLg" as="h5">
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  color: "black",
                                }}
                              >
                                ${product.originalPrice}
                              </span>{" "}
                              ${product.discountedPrice}
                            </Text>
                          </div>
                          <div
                            style={{ color: "#8d5a33", marginBottom: "8px" }}
                          >
                            <Text variant="headingLg" as="p">
                              {product.savings}% Savings
                            </Text>
                          </div>
                          <div style={{ marginBottom: "8px" }}>
                            <Text>{product.description}</Text>
                          </div>
                          <div style={{ marginBottom: "10px" }}>
                            <List spacing="extraTight">
                              {product.variants.map((variant, i) => {
                                return <List.Item key={i}>{variant}</List.Item>;
                              })}
                            </List>
                          </div>
                          <div>
                            <Select
                              options={product.options}
                              onChange={handleSelectChange}
                              value={selected}
                            />
                          </div>
                          <div className="quantitySelector">
                            <Box>Quantity</Box>
                            <div className="minus">
                              <button onClick={decrement}>-</button>
                            </div>
                            <div className="quantity">{quantity}</div>
                            <div className="plus">
                              <button onClick={incremnet}>+</button>
                            </div>
                          </div>
                          <div
                            style={{ margin: "5px 0" }}
                            className="orderButton"
                          >
                            <Button fullWidth>Add to Order</Button>
                          </div>
                          <div className="checkoutButton">
                            <Button fullWidth>Skip & Checkout</Button>
                          </div>
                        </Box>
                      </div>
                    </div>
                  </Stack.Item>
                );
              })}
            </Slider>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default ProductDetailsPage;
