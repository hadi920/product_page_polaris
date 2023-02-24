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

  const options = [
    { label: "Variants - As pic/ XL /China", value: "XL" },
    { label: "Variants - As pic/ M /China", value: "M" },
    { label: "Variants - As pic/ S /China", value: "S" },
    { label: "Variants - As pic/ L /China", value: "L" },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
                    <Button plain removeUnderline>
                      <Text variant="headingMd" as="h5">
                        Previous Offer
                      </Text>
                    </Button>
                  </div>
                  <div className="nextBtn">
                    <Button plain removeUnderline>
                      <Text variant="headingMd" as="h5">
                        Next Offer
                      </Text>
                    </Button>
                    <Icon source={ChevronRightMinor} />
                  </div>
                </div>
                <div className="pagination">
                  <span className="page"></span>
                  <span className="page"></span>
                  <span className="page"></span>
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
              <Stack.Item>
                <div className="content">
                  <div className="productImage">
                    <Box padding="4" width="100%">
                      <img
                        className="image"
                        src={productImage}
                        alt="product_banner"
                      />
                    </Box>
                  </div>
                  <div className="productDetails">
                    <Box padding="4" width="100%">
                      <Text variant="headingLg" as="h5" fontWeight="bold">
                        Animal Graphic T-Shirt
                      </Text>

                      <div className="price">
                        <Text variant="headingLg" as="h5">
                          <span
                            style={{
                              textDecoration: "line-through",
                              color: "black",
                            }}
                          >
                            $24.00
                          </span>{" "}
                          $16.00
                        </Text>
                      </div>
                      <div style={{ color: "#8d5a33", marginBottom: "8px" }}>
                        <Text variant="headingLg" as="p">
                          10% Savings
                        </Text>
                      </div>
                      <div style={{ marginBottom: "8px" }}>
                        <Text>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Recusandae, quae!
                        </Text>
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <List spacing="extraTight">
                          <List.Item>Solid Shirt with Pant Jacket</List.Item>
                          <List.Item>Blue Pant with pant jacket</List.Item>
                          <List.Item>Blue Blazer with Pant Jacket</List.Item>
                          <List.Item>Blue Blazer with Pant Jacket</List.Item>
                        </List>
                      </div>
                      <div>
                        <Select
                          options={options}
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
                      <div style={{ margin: "5px 0" }} className="orderButton">
                        <Button fullWidth>Add to Order</Button>
                      </div>
                      <div className="checkoutButton">
                        <Button fullWidth>Skip & Checkout</Button>
                      </div>
                    </Box>
                  </div>
                </div>
              </Stack.Item>
            </Slider>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default ProductDetailsPage;
