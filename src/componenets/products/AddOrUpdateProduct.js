import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getCategories } from "../../redux/actions/CategoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products,
  categories,
  getCategories,
  saveProduct,
  ...props
}) {
  const { productId } = useParams(); // useParams kullanarak productId alıyoruz
  const navigate = useNavigate();
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product, categories]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(previousProduct => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value
    }));
    validate(name, value);
  }

  function validate(name, value) {
    if (name === "productName" && value === "") {
      setErrors(previousErrors => ({
        ...previousErrors,
        productName: "Ürün ismi olmalıdır"
      }));
    } else {
      setErrors(previousErrors => ({
        ...previousErrors,
        productName: ""
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      navigate("/");
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

function getProductById(products, productId) {
  return products.find(product => product.id == productId) || null;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.productId; // productId'yi doğrudan props olarak alıyoruz
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct
};

export default connect(
  (state, ownProps) => mapStateToProps(state, { ...ownProps, productId: useParams().productId }),
  mapDispatchToProps
)(AddOrUpdateProduct);

