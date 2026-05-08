extern crate wasm_bindgen;
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn dot(
    v0: Vec<f64>,
    v1: Vec<f64>
) -> f64 {
    v0[0] * v1[0] + v0[1] * v1[1] + Some(v0[2]).unwrap_or(0.0) * Some(v1[2]).unwrap_or(0.0)
}

#[wasm_bindgen]
pub fn length(
    v: Vec<f64> 
) -> f64 {
    dot(v.clone(), v).sqrt()
}
