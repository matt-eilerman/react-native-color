import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Slider } from 'react-native-range-slider-expo';

const GradientSlider = ({
  style,
  value,
  step,
  maximumValue,
  gradient,
  onValueChange,
  thumbTintColor
}) => {
  console.log('maximumValue', maximumValue)
  console.log('value', value)
  console.log('step', step)
  console.log('maximumValue', maximumValue)
  return (
    <View style={[styles.container, style]}>
      <View style={styles.gradient}>{gradient}</View>
      <Slider
        min={1}
        max={maximumValue}
        valueOnChange={onValueChange}
        initialValue={value}
        step={step}
        inRangeBarColor="transparent"
        knobColor={thumbTintColor}
        showValueLabels={false}
      />
    </View>
  );
};

export default GradientSlider;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

GradientSlider.propTypes = {
  value: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
  thumbTintColor: PropTypes.string.isRequired
};