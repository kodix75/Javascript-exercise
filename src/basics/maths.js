import { error } from "node:console";
import { type } from "node:os";

/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  if (typeof diameter === "string" || Number.isNaN(diameter) || diameter < 0) {
    alert("error");
  } else if (diameter === 0) {
    return 0;
  } else if (diameter === 1) {
    return Number((4 / 3) * Math.PI * (diameter / 2) ** 3);
  } else if (diameter) {
    return Number((4 / 3) * Math.PI * (diameter / 2) ** 3);
  } else {
    return;
  }
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  if (typeof n === "string") {
    alert("error");
  } else if (Number.isNaN(n)) {
    alert("error");
  } else if (Number.isInteger(n)) {
    return n;
  } else if (!Number.isInteger(n)) {
    return Math.round(n * 10) / 10
  } else {
    return
  }
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {

  if (!Array.isArray(grades)) {
    throw new error("error");
  }
  if (!grades.every(g => typeof g === 'number' && !Number.isNaN(g))) {
    throw new error("error");
  }
  if (grades.length === 1) {
    return grades[0];
  }
  const sum = Number(grades.reduce((a, b) => a + b, 0));
  return sum / grades.length;
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  if (!Array.isArray(grades)) {
    throw new error("error");
  }
  if (!grades.every(g => typeof g === 'number' && !Number.isNaN(g))) {
    throw new error("error");
  }
  if (grades.length === 1) {
    return grades[0];
  }
  const sum = Number(grades.reduce((a, b) => a + b, 0));
  const rawAverage = sum / grades.length;
  return Number(rawAverage.toFixed(1));
}
