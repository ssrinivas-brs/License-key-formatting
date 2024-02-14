function reformatLicenseKey() {
    var input = document.getElementById("licenseKey").value;
    var groupSize = parseInt(document.getElementById("groupSize").value);

    var formattedKey = reformatKey(input, groupSize);

    document.getElementById("result").innerText = "formatted Key: " + formattedKey;
  }

  function reformatKey(s, k) {
    // Remove existing dashes and convert to uppercase
    var cleanedKey = s.replace(/-/g, '').toUpperCase();

    // Calculate the length of the first group
    var firstGroupLength = cleanedKey.length % k;

    // Initialize the reformatted key with the first group
    var reformattedKey = cleanedKey.substr(0, firstGroupLength);

    // Add dashes and remaining groups
    for (var i = firstGroupLength; i < cleanedKey.length; i += k) {
      reformattedKey += (reformattedKey.length > 0 ? '-' : '') + cleanedKey.substr(i, k);
    }

    return reformattedKey;
  }

  console.log('formatted Key');