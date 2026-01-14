import { Modal, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ISelectLocationModalProps } from './SelectLocationModal.types';
import { styles } from './SelectLocationModal.styles';
import Button from '../Button/Button.index';
import { useState } from 'react';
import { ILocation } from '@/app/(tabs)/add_task';

export default function SelectLocationModal({
  visible,
  onClose,
  onSelect,
}: ISelectLocationModalProps) {
  const [selectedLocation, setSelectedLocation] = useState<ILocation | null>(null);

  const handleSelectLocation = (e: any) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setSelectedLocation({ latitude: latitude, longitude: longitude });
  };
  const handleSubmit = () => {
    onSelect(selectedLocation);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal transparent={true} animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.header}>Select Location</Text>
          <GooglePlacesAutocomplete
            placeholder="Search for a location"
            fetchDetails={true}
            onPress={(data, details = null) => {
              // const { lat, lng } = details?.geometry?.location;
              // setSelectedLocation({
              //   latitude: lat,
              //   longitude: lng,
              //   address: data.description,
              // });
            }}
            // query={{
            //   key:
            //     Platform.OS === 'ios'
            //       ? process.env.EXPO_PUBLIC_IOS_MAPS_API_KEY
            //       : process.env.EXPO_PUBLIC_ANDROID_MAPS_API_KEY,
            //   language: 'en',
            // }}
            query={{
              key: 'AIzaSyCs_PU_ywyWxFGDLAo0BfR4W7sFjjKr9UQ',
              language: 'en',
            }}
            styles={
              {
                // container: { flex: 0, position: 'absolute', width: '100%', zIndex: 1 },
                // listView: { backgroundColor: 'white' },
              }
            }
          />
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            onPress={handleSelectLocation}
          >
            {selectedLocation && <Marker coordinate={selectedLocation} />}
          </MapView>
          <View style={styles.buttonContainer}>
            <Button
              size="small"
              title="Cancel"
              type="outlined"
              onPress={handleCancel}
              customButtonStyle={styles.fullWidthButton}
            />
            <Button
              size="small"
              title="Confirm"
              onPress={handleSubmit}
              customButtonStyle={styles.fullWidthButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
