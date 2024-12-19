import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Contact } from '../../types/contact';

interface ContactCardProps {
  contact: Contact;
  onChatPress: (contactId: string) => void;
}

export function ContactCard({ contact, onChatPress }: ContactCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.contactInfo}>
        <MaterialCommunityIcons name="account" size={40} color="#65adf1" />
        <View>
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.lastActivity}>
            Dernière activité: {contact.lastActivity}
          </Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.chatButton}
        onPress={() => onChatPress(contact.id)}
      >
        <MaterialCommunityIcons name="chat" size={24} color="#65adf1" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  lastActivity: {
    fontSize: 14,
    color: '#666',
  },
  chatButton: {
    padding: 8,
  },
});