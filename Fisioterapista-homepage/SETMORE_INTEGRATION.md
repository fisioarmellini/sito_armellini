# Setmore Integration Guide

## Step-by-Step Instructions

### 1. Create/Login to Setmore Account
- Go to https://www.setmore.com
- Sign up for a free account or log in
- Complete your profile setup

### 2. Configure Your Services
- Go to **Services** in the dashboard
- Add your physiotherapy services (e.g., "Consulenza Fisioterapica", "Terapia Manuale", etc.)
- Set duration and price for each service

### 3. Set Your Availability
- Go to **Settings** → **Working Hours**
- Set your available days and times
- Configure breaks and time off

### 4. Get Your Booking Page URL
- Go to **Settings** → **Booking Page**
- Your booking page URL will be something like: `https://booking.setmore.com/scheduleappointment/abc123`
- Copy the part after `/scheduleappointment/` (this is YOUR_SETMORE_ID)

### 5. Update the Website
Open `Fisioterapista-homepage/src/components/BookingSection.tsx` and replace:
```typescript
src="https://booking.setmore.com/scheduleappointment/YOUR_SETMORE_ID"
```
with your actual ID:
```typescript
src="https://booking.setmore.com/scheduleappointment/abc123"
```

### 6. Customize Setmore Appearance (Optional)
In Setmore dashboard:
- Go to **Settings** → **Booking Page** → **Customize**
- Change colors to match your website (use your primary color)
- Upload your logo
- Customize confirmation messages in Italian

### 7. Test the Integration
1. Save the file
2. Run `npm run dev` locally
3. Navigate to the Prenotazione page
4. Try booking an appointment
5. Check if you receive confirmation emails

### 8. Deploy
```bash
npm run deploy
```

## Alternative: Setmore Button Widget

If you prefer a popup booking widget instead of embedded iframe:

1. In Setmore, go to **Settings** → **Booking Page** → **Book Now Button**
2. Copy the script code
3. Add it to your `index.html` before `</body>`:

```html
<script src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"></script>
```

4. Update the "Prenota" button in Header.tsx:
```typescript
<a href="https://booking.setmore.com/scheduleappointment/YOUR_ID" 
   id="Setmore_button_iframe">
  <Button>Prenota</Button>
</a>
```

## Troubleshooting

**Issue: Iframe not loading**
- Check if your Setmore ID is correct
- Verify your Setmore account is active
- Check browser console for errors

**Issue: Iframe too small on mobile**
- The component is already responsive
- Adjust `min-h-[600px]` in BookingSection.tsx if needed

**Issue: Wrong language**
- Go to Setmore Settings → Language
- Select Italian (Italiano)

## Support
- Setmore Help: https://support.setmore.com
- Setmore Community: https://community.setmore.com
