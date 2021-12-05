import Wheelchair from 'icons/Wheelchair';
import { IAccessibilityInfo } from 'network/GoogleMapsAPI';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { commonStyles } from '../utils/commonStyles';
import colors from 'theme/colors';
import Ear from 'icons/Ear';
import Eye from 'icons/Eye';
import Parking from 'icons/Parking';

interface Props {
  data: IAccessibilityInfo;
}

const AccessibilityInfo = ({ data }: Props) => {
  const { wheelchair, lighting, parking, inductionLoop } = data;
  const { flexRowCentre } = commonStyles;

  return (
    <View>
      {wheelchair && (
        <View style={flexRowCentre}>
          <View style={styles.icon}>
            <Wheelchair color={colors.secondary} size={30} />
          </View>
          <Paragraph>Disabled chair access</Paragraph>
        </View>
      )}
      {parking && (
        <View style={flexRowCentre}>
          <View style={styles.icon}>
            <Parking color={colors.secondary} size={30} />
          </View>

          <Paragraph>Disabled parking</Paragraph>
        </View>
      )}
      {lighting && (
        <View style={flexRowCentre}>
          <View style={styles.icon}>
            <Eye color={colors.secondary} size={30} />
          </View>

          <Paragraph>Good lighting</Paragraph>
        </View>
      )}
      {inductionLoop && (
        <View style={flexRowCentre}>
          <View style={styles.icon}>
            <Ear color={colors.secondary} size={30} />
          </View>

          <Paragraph>Induction loop</Paragraph>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: { marginRight: 20 },
});

export default AccessibilityInfo;
