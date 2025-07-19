var APP_DATA = {
  "scenes": [
    {
      "id": "0--sn-khu",
      "name": " sân khấu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.043803738910590084,
          "pitch": 0.045174665876681175,
          "rotation": 0,
          "target": "2-gia-sn-khu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tri-sn-khu",
      "name": "trái sân khấu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8792293886835072,
          "pitch": 0.006779640106984175,
          "rotation": 0,
          "target": "2-gia-sn-khu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-gia-sn-khu",
      "name": "giữa sân khấu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.032000644468739736,
          "pitch": 0.1407557452215844,
          "rotation": 0,
          "target": "0--sn-khu"
        },
        {
          "yaw": -1.512579872471818,
          "pitch": 0.09878818728060246,
          "rotation": 0,
          "target": "1-tri-sn-khu"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
