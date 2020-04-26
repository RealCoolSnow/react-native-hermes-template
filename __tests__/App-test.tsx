/**
 * @format
 */

import 'react-native';

import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import App from '../App';

describe('app', () => {
  it('renders correctly', () => {
    expect.assertions(1);
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <RCTSafeAreaView
        emulateUnlessSupported={true}
      >
        <RCTScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={
            Object {
              "backgroundColor": "#F3F3F3",
            }
          }
        >
          <View>
            <View
              accessibilityIgnoresInvertColors={true}
              style={
                Object {
                  "backgroundColor": "#F3F3F3",
                  "paddingBottom": 40,
                  "paddingHorizontal": 32,
                  "paddingTop": 96,
                }
              }
            >
              <Image
                accessibilityRole="image"
                source={
                  Object {
                    "testUri": "../Libraries/NewAppScreen/components/logo.png",
                  }
                }
                style={
                  Array [
                    Object {
                      "bottom": 0,
                      "left": 0,
                      "position": "absolute",
                      "right": 0,
                      "top": 0,
                    },
                    Object {
                      "height": undefined,
                      "width": undefined,
                    },
                    Object {
                      "marginBottom": -192,
                      "marginLeft": -128,
                      "opacity": 0.2,
                      "overflow": "visible",
                      "resizeMode": "cover",
                    },
                  ]
                }
              />
              <Text
                style={
                  Object {
                    "color": "#000",
                    "fontSize": 40,
                    "fontWeight": "600",
                    "textAlign": "center",
                  }
                }
              >
                Welcome to React
              </Text>
            </View>
            <View
              style={
                Object {
                  "backgroundColor": "#FFF",
                }
              }
            >
              <View
                style={
                  Object {
                    "marginTop": 32,
                    "paddingHorizontal": 24,
                  }
                }
              >
                <Text
                  style={
                    Object {
                      "color": "#000",
                      "fontSize": 24,
                      "fontWeight": "600",
                    }
                  }
                >
                  Step One
                </Text>
                <Text
                  style={
                    Object {
                      "color": "#444",
                      "fontSize": 18,
                      "fontWeight": "400",
                      "marginTop": 8,
                    }
                  }
                >
                  Edit 
                  <Text
                    style={
                      Object {
                        "fontWeight": "700",
                      }
                    }
                  >
                    App.tsx
                  </Text>
                   to change this screen and then come back to see your edits.
                </Text>
              </View>
              <View
                style={
                  Object {
                    "marginTop": 32,
                    "paddingHorizontal": 24,
                  }
                }
              >
                <Text
                  style={
                    Object {
                      "color": "#000",
                      "fontSize": 24,
                      "fontWeight": "600",
                    }
                  }
                >
                  See Your Changes
                </Text>
                <Text
                  style={
                    Object {
                      "color": "#444",
                      "fontSize": 18,
                      "fontWeight": "400",
                      "marginTop": 8,
                    }
                  }
                >
                  <Text>
                    Press 
                    <Text
                      style={
                        Object {
                          "fontWeight": "700",
                        }
                      }
                    >
                      Cmd + R
                    </Text>
                     in the simulator to reload your app's code.
                  </Text>
                </Text>
              </View>
              <View
                style={
                  Object {
                    "marginTop": 32,
                    "paddingHorizontal": 24,
                  }
                }
              >
                <Text
                  style={
                    Object {
                      "color": "#000",
                      "fontSize": 24,
                      "fontWeight": "600",
                    }
                  }
                >
                  Debug
                </Text>
                <Text
                  style={
                    Object {
                      "color": "#444",
                      "fontSize": 18,
                      "fontWeight": "400",
                      "marginTop": 8,
                    }
                  }
                >
                  <Text>
                    Press 
                    <Text
                      style={
                        Object {
                          "fontWeight": "700",
                        }
                      }
                    >
                      Cmd + D
                    </Text>
                     in the simulator or
                     
                    <Text
                      style={
                        Object {
                          "fontWeight": "700",
                        }
                      }
                    >
                      Shake
                    </Text>
                     your device to open the React Native debug menu.
                  </Text>
                </Text>
              </View>
              <View
                style={
                  Object {
                    "marginTop": 32,
                    "paddingHorizontal": 24,
                  }
                }
              >
                <Text
                  style={
                    Object {
                      "color": "#000",
                      "fontSize": 24,
                      "fontWeight": "600",
                    }
                  }
                >
                  Learn More
                </Text>
                <Text
                  style={
                    Object {
                      "color": "#444",
                      "fontSize": 18,
                      "fontWeight": "400",
                      "marginTop": 8,
                    }
                  }
                >
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <View
                style={
                  Object {
                    "marginTop": 32,
                    "paddingHorizontal": 24,
                  }
                }
              >
                <View
                  style={
                    Object {
                      "backgroundColor": "#DAE1E7",
                      "height": 1,
                    }
                  }
                />
                <View
                  accessibilityRole="button"
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "flexDirection": "row",
                      "flexWrap": "wrap",
                      "justifyContent": "space-between",
                      "opacity": 1,
                      "paddingVertical": 8,
                    }
                  }
                >
                  <Text
                    style={
                      Object {
                        "color": "#1292B4",
                        "flex": 2,
                        "fontSize": 18,
                        "fontWeight": "400",
                      }
                    }
                  >
                    The Basics
                  </Text>
                  <Text
                    style={
                      Object {
                        "color": "#444",
                        "flex": 3,
                        "fontSize": 18,
                        "fontWeight": "400",
                        "paddingVertical": 16,
                      }
                    }
                  >
                    Explains a Hello World for React Native.
                  </Text>
                </View>
                <View
                  style={
                    Object {
                      "backgroundColor": "#DAE1E7",
                      "height": 1,
                    }
                  }
                />
                <View
                  accessibilityRole="button"
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "flexDirection": "row",
                      "flexWrap": "wrap",
                      "justifyContent": "space-between",
                      "opacity": 1,
                      "paddingVertical": 8,
                    }
                  }
                >
                  <Text
                    style={
                      Object {
                        "color": "#1292B4",
                        "flex": 2,
                        "fontSize": 18,
                        "fontWeight": "400",
                      }
                    }
                  >
                    Style
                  </Text>
                  <Text
                    style={
                      Object {
                        "color": "#444",
                        "flex": 3,
                        "fontSize": 18,
                        "fontWeight": "400",
                        "paddingVertical": 16,
                      }
                    }
                  >
                    Covers how to use the prop named style which controls the visuals.
                  </Text>
                </View>
                <View
                  style={
                    Object {
                      "backgroundColor": "#DAE1E7",
                      "height": 1,
                    }
                  }
                />
                <View
                  accessibilityRole="button"
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "flexDirection": "row",
                      "flexWrap": "wrap",
                      "justifyContent": "space-between",
                      "opacity": 1,
                      "paddingVertical": 8,
                    }
                  }
                >
                  <Text
                    style={
                      Object {
                        "color": "#1292B4",
                        "flex": 2,
                        "fontSize": 18,
                        "fontWeight": "400",
                      }
                    }
                  >
                    Layout
                  </Text>
                  <Text
                    style={
                      Object {
                        "color": "#444",
                        "flex": 3,
                        "fontSize": 18,
                        "fontWeight": "400",
                        "paddingVertical": 16,
                      }
                    }
                  >
                    React Native uses flexbox for layout, learn how it works.
                  </Text>
                </View>
                <View
                  style={
                    Object {
                      "backgroundColor": "#DAE1E7",
                      "height": 1,
                    }
                  }
                />
                <View
                  accessibilityRole="button"
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "flexDirection": "row",
                      "flexWrap": "wrap",
                      "justifyContent": "space-between",
                      "opacity": 1,
                      "paddingVertical": 8,
                    }
                  }
                >
                  <Text
                    style={
                      Object {
                        "color": "#1292B4",
                        "flex": 2,
                        "fontSize": 18,
                        "fontWeight": "400",
                      }
                    }
                  >
                    Components
                  </Text>
                  <Text
                    style={
                      Object {
                        "color": "#444",
                        "flex": 3,
                        "fontSize": 18,
                        "fontWeight": "400",
                        "paddingVertical": 16,
                      }
                    }
                  >
                    The full list of components and APIs inside React Native.
                  </Text>
                </View>
                <View
                  style={
                    Object {
                      "backgroundColor": "#DAE1E7",
                      "height": 1,
                    }
                  }
                />
                <View
                  accessibilityRole="button"
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "flexDirection": "row",
                      "flexWrap": "wrap",
                      "justifyContent": "space-between",
                      "opacity": 1,
                      "paddingVertical": 8,
                    }
                  }
                >
                  <Text
                    style={
                      Object {
                        "color": "#1292B4",
                        "flex": 2,
                        "fontSize": 18,
                        "fontWeight": "400",
                      }
                    }
                  >
                    Navigation
                  </Text>
                  <Text
                    style={
                      Object {
                        "color": "#444",
                        "flex": 3,
                        "fontSize": 18,
                        "fontWeight": "400",
                        "paddingVertical": 16,
                      }
                    }
                  >
                    How to handle moving between screens inside your application.
                  </Text>
                </View>
                <View
                  style={
                    Object {
                      "backgroundColor": "#DAE1E7",
                      "height": 1,
                    }
                  }
                />
                <View
                  accessibilityRole="button"
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "flexDirection": "row",
                      "flexWrap": "wrap",
                      "justifyContent": "space-between",
                      "opacity": 1,
                      "paddingVertical": 8,
                    }
                  }
                >
                  <Text
                    style={
                      Object {
                        "color": "#1292B4",
                        "flex": 2,
                        "fontSize": 18,
                        "fontWeight": "400",
                      }
                    }
                  >
                    Networking
                  </Text>
                  <Text
                    style={
                      Object {
                        "color": "#444",
                        "flex": 3,
                        "fontSize": 18,
                        "fontWeight": "400",
                        "paddingVertical": 16,
                      }
                    }
                  >
                    How to use the Fetch API in React Native.
                  </Text>
                </View>
                <View
                  style={
                    Object {
                      "backgroundColor": "#DAE1E7",
                      "height": 1,
                    }
                  }
                />
                <View
                  accessibilityRole="button"
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "flexDirection": "row",
                      "flexWrap": "wrap",
                      "justifyContent": "space-between",
                      "opacity": 1,
                      "paddingVertical": 8,
                    }
                  }
                >
                  <Text
                    style={
                      Object {
                        "color": "#1292B4",
                        "flex": 2,
                        "fontSize": 18,
                        "fontWeight": "400",
                      }
                    }
                  >
                    Help
                  </Text>
                  <Text
                    style={
                      Object {
                        "color": "#444",
                        "flex": 3,
                        "fontSize": 18,
                        "fontWeight": "400",
                        "paddingVertical": 16,
                      }
                    }
                  >
                    Need more help? There are many other React Native developers who may have the answer.
                  </Text>
                </View>
                <View
                  style={
                    Object {
                      "backgroundColor": "#DAE1E7",
                      "height": 1,
                    }
                  }
                />
                <View
                  accessibilityRole="button"
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "flexDirection": "row",
                      "flexWrap": "wrap",
                      "justifyContent": "space-between",
                      "opacity": 1,
                      "paddingVertical": 8,
                    }
                  }
                >
                  <Text
                    style={
                      Object {
                        "color": "#1292B4",
                        "flex": 2,
                        "fontSize": 18,
                        "fontWeight": "400",
                      }
                    }
                  >
                    Follow us on Twitter
                  </Text>
                  <Text
                    style={
                      Object {
                        "color": "#444",
                        "flex": 3,
                        "fontSize": 18,
                        "fontWeight": "400",
                        "paddingVertical": 16,
                      }
                    }
                  >
                    Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </RCTScrollView>
      </RCTSafeAreaView>
    `);
  });
});
