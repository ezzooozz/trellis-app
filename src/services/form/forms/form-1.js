export default {
  'form': {
    'id': '5612115f-9208-4696-9497-4398ae112f8b',
    'form_master_id': '5612115f-9208-4696-9497-4398ae112f8b',
    'name_translation_id': '861fdc65-a6d9-447f-9e3a-4b09337f5d7a',
    'version': 1,
    'is_published': '1',
    'created_at': '2017-08-17 14:47:04',
    'updated_at': '2017-11-07 15:15:42',
    'deleted_at': null,
    'sections': [
      {
        'id': 'c70d6f18-6815-407a-8e5f-d344f564b7ba',
        'name_translation_id': '6db73b8e-a053-4bb4-8a9e-e6787139a087',
        'created_at': '2017-09-25 13:57:40',
        'updated_at': '2017-09-25 13:57:40',
        'deleted_at': null,
        'pivot': {
          'form_id': '5612115f-9208-4696-9497-4398ae112f8b',
          'section_id': 'c70d6f18-6815-407a-8e5f-d344f564b7ba',
          'sort_order': 4,
          'is_repeatable': 0,
          'max_repetitions': 0,
          'repeat_prompt_translation_id': null,
          'created_at': '2017-09-25 13:57:40',
          'updated_at': '2017-09-25 13:57:40'
        },
        'question_groups': [
          {
            'id': 'c0bb588b-e54c-42bc-ad04-190fa3ca19c2',
            'created_at': '2017-09-25 13:57:50',
            'updated_at': '2017-09-25 13:57:50',
            'deleted_at': null,
            'pivot': {
              'section_id': 'c70d6f18-6815-407a-8e5f-d344f564b7ba',
              'question_group_id': 'c0bb588b-e54c-42bc-ad04-190fa3ca19c2',
              'question_group_order': 1,
              'created_at': '2017-09-25 13:57:50',
              'updated_at': '2017-09-25 13:57:50'
            },
            'questions': [
              {
                'id': 'ad4498d9-61c8-4139-a0f5-6d41735d39a2',
                'question_type_id': 'b58f23fa-52c7-435e-9b31-5fb771e79f41',
                'question_translation_id': 'd1f875c9-173a-4d47-83f1-541262602469',
                'question_group_id': 'c0bb588b-e54c-42bc-ad04-190fa3ca19c2',
                'sort_order': 1,
                'var_name': 'o9999',
                'created_at': '2017-09-25 13:58:11',
                'updated_at': '2017-09-25 13:58:11',
                'deleted_at': null,
                'choices': [
                  {
                    'id': '489ffa48-f5fe-4e49-bb10-69f5c5434185',
                    'choice_translation_id': '65fee349-8793-4b7d-98e0-2940820bf582',
                    'val': '2',
                    'created_at': '2017-09-25 13:58:16',
                    'updated_at': '2017-09-25 13:58:22',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'ad4498d9-61c8-4139-a0f5-6d41735d39a2',
                      'choice_id': '489ffa48-f5fe-4e49-bb10-69f5c5434185',
                      'sort_order': 2,
                      'id': '251ba257-c19e-4d3f-a285-ec47081a49dd',
                      'created_at': '2017-09-25 13:58:16',
                      'updated_at': '2017-09-25 13:58:16'
                    },
                    'choice_translation': {
                      'id': '65fee349-8793-4b7d-98e0-2940820bf582',
                      'created_at': '2017-09-25 13:58:16',
                      'updated_at': '2017-09-25 13:58:16',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': '19027499-60ac-4d62-a61f-878b9c997f87',
                          'translation_id': '65fee349-8793-4b7d-98e0-2940820bf582',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'No',
                          'created_at': '2017-09-25 13:58:29',
                          'updated_at': '2017-09-25 13:58:29',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': '44781717-020d-4d7c-b962-fd69fc812354',
                          'translation_id': '65fee349-8793-4b7d-98e0-2940820bf582',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'No',
                          'created_at': '2017-09-25 13:58:20',
                          'updated_at': '2017-09-25 13:58:20',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  },
                  {
                    'id': 'ef61a383-a460-4876-882d-db518e08681d',
                    'choice_translation_id': '7fd9f85b-568b-4c46-8307-9dd3220bf6bc',
                    'val': '1',
                    'created_at': '2017-09-25 13:58:15',
                    'updated_at': '2017-09-25 13:58:19',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'ad4498d9-61c8-4139-a0f5-6d41735d39a2',
                      'choice_id': 'ef61a383-a460-4876-882d-db518e08681d',
                      'sort_order': 1,
                      'id': '8cc34f11-c4f5-4494-84c9-70d3384f4afa',
                      'created_at': '2017-09-25 13:58:15',
                      'updated_at': '2017-09-25 13:58:15'
                    },
                    'choice_translation': {
                      'id': '7fd9f85b-568b-4c46-8307-9dd3220bf6bc',
                      'created_at': '2017-09-25 13:58:15',
                      'updated_at': '2017-09-25 13:58:15',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': 'e24fbb53-e9ad-4502-8e0b-54e54d445356',
                          'translation_id': '7fd9f85b-568b-4c46-8307-9dd3220bf6bc',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Si',
                          'created_at': '2017-09-25 13:58:26',
                          'updated_at': '2017-09-25 13:58:26',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': 'f6b0423d-bde9-4ad9-81e1-3f47bd89954e',
                          'translation_id': '7fd9f85b-568b-4c46-8307-9dd3220bf6bc',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Yes',
                          'created_at': '2017-09-25 13:58:18',
                          'updated_at': '2017-09-25 13:58:18',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  }
                ],
                'question_translation': {
                  'id': 'd1f875c9-173a-4d47-83f1-541262602469',
                  'created_at': '2017-09-25 13:58:11',
                  'updated_at': '2017-09-25 13:58:11',
                  'deleted_at': null,
                  'translation_text': [
                    {
                      'id': '926d9535-5e9a-4b97-9dc3-d1a111031944',
                      'translation_id': 'd1f875c9-173a-4d47-83f1-541262602469',
                      'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'This is the final question in the form. Is the form complete?',
                      'created_at': '2017-09-25 13:58:11',
                      'updated_at': '2017-09-25 13:58:11',
                      'deleted_at': null,
                      'locale': {
                        'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'en',
                        'language_name': 'English',
                        'language_native': 'English',
                        'created_at': '2017-06-21 20:53:51',
                        'updated_at': '2017-06-21 20:53:51',
                        'deleted_at': null
                      }
                    },
                    {
                      'id': 'fbea1912-24fe-4fa2-9013-7684397560ff',
                      'translation_id': 'd1f875c9-173a-4d47-83f1-541262602469',
                      'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'Esta es la ultima pregunta en este formulario. Esta completo el formulario?',
                      'created_at': '2017-09-29 17:22:17',
                      'updated_at': '2017-09-29 17:22:17',
                      'deleted_at': null,
                      'locale': {
                        'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'es',
                        'language_name': 'Spanish',
                        'language_native': 'español',
                        'created_at': '2017-06-21 20:53:53',
                        'updated_at': '2017-06-21 20:53:53',
                        'deleted_at': null
                      }
                    }
                  ]
                },
                'question_type': {
                  'id': 'b58f23fa-52c7-435e-9b31-5fb771e79f41',
                  'name': 'multiple_choice',
                  'created_at': '2017-06-21 20:53:50',
                  'updated_at': '2017-06-21 20:53:50',
                  'deleted_at': null
                },
                'question_parameters': [
                  {
                    'id': '07270cde-a684-4f7a-8d1c-20cd7a20364f',
                    'question_id': 'ad4498d9-61c8-4139-a0f5-6d41735d39a2',
                    'parameter_id': '6',
                    'val': 'false',
                    'created_at': '2017-12-15 15:49:16',
                    'updated_at': '2017-12-15 15:50:58',
                    'deleted_at': null,
                    'parameter': {
                      'id': '6',
                      'name': 'show_dk',
                      'created_at': '2017-08-07 20:12:53',
                      'updated_at': '2017-08-07 20:12:53',
                      'deleted_at': null
                    }
                  },
                  {
                    'id': 'e9b3966c-28dc-4eda-ba6f-1a2e1547cd85',
                    'question_id': 'ad4498d9-61c8-4139-a0f5-6d41735d39a2',
                    'parameter_id': '7',
                    'val': 'false',
                    'created_at': '2017-12-15 15:49:25',
                    'updated_at': '2017-12-15 15:51:00',
                    'deleted_at': null,
                    'parameter': {
                      'id': '7',
                      'name': 'show_rf',
                      'created_at': '2017-08-07 20:12:53',
                      'updated_at': '2017-08-07 20:12:53',
                      'deleted_at': null
                    }
                  }
                ],
                'assign_condition_tags': []
              }
            ],
            'skips': []
          }
        ],
        'name_translation': {
          'id': '6db73b8e-a053-4bb4-8a9e-e6787139a087',
          'created_at': '2017-09-25 13:57:40',
          'updated_at': '2017-09-25 13:57:40',
          'deleted_at': null,
          'translation_text': [
            {
              'id': 'd39fc3b9-f951-46d2-879e-33abdfb5babb',
              'translation_id': '6db73b8e-a053-4bb4-8a9e-e6787139a087',
              'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
              'translated_text': 'End Form',
              'created_at': '2017-09-25 13:57:40',
              'updated_at': '2017-09-25 13:57:40',
              'deleted_at': null,
              'locale': {
                'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                'language_tag': 'es',
                'language_name': 'Spanish',
                'language_native': 'español',
                'created_at': '2017-06-21 20:53:53',
                'updated_at': '2017-06-21 20:53:53',
                'deleted_at': null
              }
            }
          ]
        },
        'form_sections': [
          {
            'id': '91ffca4d-8c3c-44de-a2eb-991753b26d3a',
            'form_id': '5612115f-9208-4696-9497-4398ae112f8b',
            'section_id': 'c70d6f18-6815-407a-8e5f-d344f564b7ba',
            'sort_order': 4,
            'is_repeatable': '0',
            'max_repetitions': 0,
            'repeat_prompt_translation_id': null,
            'follow_up_question_id': null,
            'created_at': '2017-09-25 13:57:40',
            'updated_at': '2017-09-25 13:57:40',
            'deleted_at': null,
            'repeat_prompt_translation': null
          }
        ]
      },
      {
        'id': 'f3a2a283-9b1a-4c85-a1af-326ebda2ba2e',
        'name_translation_id': 'c73fb79c-247e-423d-85a7-a7721278f75e',
        'created_at': '2017-08-24 16:05:59',
        'updated_at': '2017-08-24 16:05:59',
        'deleted_at': null,
        'pivot': {
          'form_id': '5612115f-9208-4696-9497-4398ae112f8b',
          'section_id': 'f3a2a283-9b1a-4c85-a1af-326ebda2ba2e',
          'sort_order': 1,
          'is_repeatable': 0,
          'max_repetitions': 0,
          'repeat_prompt_translation_id': null,
          'created_at': '2017-08-24 16:05:59',
          'updated_at': '2017-08-24 16:05:59'
        },
        'question_groups': [
          {
            'id': 'c9bce3c4-65c3-4c2a-a011-6cec95e4fa2f',
            'created_at': '2017-08-24 16:05:59',
            'updated_at': '2017-08-24 16:05:59',
            'deleted_at': null,
            'pivot': {
              'section_id': 'f3a2a283-9b1a-4c85-a1af-326ebda2ba2e',
              'question_group_id': 'c9bce3c4-65c3-4c2a-a011-6cec95e4fa2f',
              'question_group_order': 1,
              'created_at': '2017-08-24 16:05:59',
              'updated_at': '2017-08-24 16:05:59'
            },
            'questions': [
              {
                'id': '3263d4f3-b763-4610-a06a-e173d101ac43',
                'question_type_id': 'c35db71d-cb10-49c7-909c-e67a9a29e736',
                'question_translation_id': 'd1dda356-acbf-4939-b178-0d82ba5cf730',
                'question_group_id': 'c9bce3c4-65c3-4c2a-a011-6cec95e4fa2f',
                'sort_order': 1,
                'var_name': 'o0100',
                'created_at': '2017-08-24 16:05:59',
                'updated_at': '2017-10-04 16:36:05',
                'deleted_at': null,
                'choices': [],
                'question_translation': {
                  'id': 'd1dda356-acbf-4939-b178-0d82ba5cf730',
                  'created_at': '2017-08-24 16:05:59',
                  'updated_at': '2017-08-24 16:05:59',
                  'deleted_at': null,
                  'translation_text': [
                    {
                      'id': '7567daac-d760-4eff-8bb9-5aca9c4d85eb',
                      'translation_id': 'd1dda356-acbf-4939-b178-0d82ba5cf730',
                      'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                      'translated_text': `NOTE TO SURVEYOR: PLEASE ENTER THE CODE OF THE BUILDING IN WHICH THE RESPONDENT LIVES. PLEASE SHOW THE BUILDING PHOTO TO THE RESPONDENT TO CONFIRM THAT THIS IS THIER HOME. DO NOT CONTINUE WITH THE SURVEY UNTIL THE RESPONDENT'S BUILDING IS CONFIRMED.`,
                      'created_at': '2017-08-24 16:05:59',
                      'updated_at': '2017-10-19 15:04:29',
                      'deleted_at': null,
                      'locale': {
                        'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'en',
                        'language_name': 'English',
                        'language_native': 'English',
                        'created_at': '2017-06-21 20:53:51',
                        'updated_at': '2017-06-21 20:53:51',
                        'deleted_at': null
                      }
                    },
                    {
                      'id': '803f4b5f-fb29-4a70-993f-0f31146a2831',
                      'translation_id': 'd1dda356-acbf-4939-b178-0d82ba5cf730',
                      'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'NOTA AL ENCUESTADOR: POR FAVOR INGRESE EL CODIGO DEL HOGAR EN QUE VIVE ACTUALMENTE EL ENCUESTADO/A. POR FAVOR MUÉSTRELE LA FOTO AL ENCUESTADO/A PARA CONFIRMAR QUE ESTE ES SU HOGAR ACTUAL. NO CONTINUE LA ENCUESTA HASTA QUE EL HOGAR DEL ENCUESTADO/A SEA CONFIRMADO.',
                      'created_at': '2017-08-24 16:05:59',
                      'updated_at': '2017-11-16 16:46:09',
                      'deleted_at': null,
                      'locale': {
                        'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'es',
                        'language_name': 'Spanish',
                        'language_native': 'español',
                        'created_at': '2017-06-21 20:53:53',
                        'updated_at': '2017-06-21 20:53:53',
                        'deleted_at': null
                      }
                    }
                  ]
                },
                'question_type': {
                  'id': 'c35db71d-cb10-49c7-909c-e67a9a29e736',
                  'name': 'geo',
                  'created_at': '2017-06-21 20:53:50',
                  'updated_at': '2017-06-21 20:53:50',
                  'deleted_at': null
                },
                'question_parameters': [
                  {
                    'id': '699807f8-f66c-45f7-b289-b84cc00e596a',
                    'question_id': '3263d4f3-b763-4610-a06a-e173d101ac43',
                    'parameter_id': '9',
                    'val': 'Building / Edificio',
                    'created_at': '2017-11-01 23:47:42',
                    'updated_at': '2017-11-16 20:27:10',
                    'deleted_at': null,
                    'parameter': {
                      'id': '9',
                      'name': 'geo_type',
                      'created_at': '2017-08-07 20:12:53',
                      'updated_at': '2017-08-07 20:12:53',
                      'deleted_at': null
                    }
                  }
                ],
                'assign_condition_tags': []
              }
            ],
            'skips': []
          },
          {
            'id': '00c3bc71-ed1b-45d5-a691-1ceac5e6ab65',
            'created_at': '2017-08-24 16:05:59',
            'updated_at': '2017-08-24 16:05:59',
            'deleted_at': null,
            'pivot': {
              'section_id': 'f3a2a283-9b1a-4c85-a1af-326ebda2ba2e',
              'question_group_id': '00c3bc71-ed1b-45d5-a691-1ceac5e6ab65',
              'question_group_order': 2,
              'created_at': '2017-08-24 16:05:59',
              'updated_at': '2017-08-24 16:05:59'
            },
            'questions': [
              {
                'id': '1061af39-b05b-45e5-acbe-cb5060a55b04',
                'question_type_id': 'cebe05f8-8e17-4c5c-a5fa-abc3a9c6c1f9',
                'question_translation_id': '0853ca71-9774-4f6b-8771-d9bfbce35ad2',
                'question_group_id': '00c3bc71-ed1b-45d5-a691-1ceac5e6ab65',
                'sort_order': 1,
                'var_name': 'o8887',
                'created_at': '2017-08-24 16:05:59',
                'updated_at': '2017-08-24 16:05:59',
                'deleted_at': null,
                'choices': [],
                'question_translation': {
                  'id': '0853ca71-9774-4f6b-8771-d9bfbce35ad2',
                  'created_at': '2017-08-24 16:05:59',
                  'updated_at': '2017-08-24 16:05:59',
                  'deleted_at': null,
                  'translation_text': [
                    {
                      'id': '23e1e987-1d80-4e49-9256-531c6311822e',
                      'translation_id': '0853ca71-9774-4f6b-8771-d9bfbce35ad2',
                      'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'Thank you again for taking part in our study. Your participation is very valuable to us. I would like to begin by verifying the members of your family that live in this household. ',
                      'created_at': '2017-08-24 16:05:59',
                      'updated_at': '2017-08-24 16:05:59',
                      'deleted_at': null,
                      'locale': {
                        'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'en',
                        'language_name': 'English',
                        'language_native': 'English',
                        'created_at': '2017-06-21 20:53:51',
                        'updated_at': '2017-06-21 20:53:51',
                        'deleted_at': null
                      }
                    },
                    {
                      'id': 'efb47a29-467b-4ba0-b0e2-6b01acfffcb3',
                      'translation_id': '0853ca71-9774-4f6b-8771-d9bfbce35ad2',
                      'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'Muchas gracias nuevamente por participar en nuestro estudio. Su participacion es muy valiosa para nosotros. Me gustaria empezar verificando los miembros de su familia que viven en este hogar.',
                      'created_at': '2017-08-24 16:05:59',
                      'updated_at': '2017-08-24 16:05:59',
                      'deleted_at': null,
                      'locale': {
                        'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'es',
                        'language_name': 'Spanish',
                        'language_native': 'español',
                        'created_at': '2017-06-21 20:53:53',
                        'updated_at': '2017-06-21 20:53:53',
                        'deleted_at': null
                      }
                    }
                  ]
                },
                'question_type': {
                  'id': 'cebe05f8-8e17-4c5c-a5fa-abc3a9c6c1f9',
                  'name': 'intro',
                  'created_at': '2017-06-21 20:53:50',
                  'updated_at': '2017-06-21 20:53:50',
                  'deleted_at': null
                },
                'question_parameters': [],
                'assign_condition_tags': []
              }
            ],
            'skips': []
          }
        ],
        'name_translation': {
          'id': 'c73fb79c-247e-423d-85a7-a7721278f75e',
          'created_at': '2017-08-24 16:05:59',
          'updated_at': '2017-08-24 16:05:59',
          'deleted_at': null,
          'translation_text': [
            {
              'id': 'd63688b6-a407-4c84-8ac6-b78edc0ea7a0',
              'translation_id': 'c73fb79c-247e-423d-85a7-a7721278f75e',
              'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
              'translated_text': 'Section 1',
              'created_at': '2017-08-24 16:05:59',
              'updated_at': '2017-08-24 16:05:59',
              'deleted_at': null,
              'locale': {
                'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                'language_tag': 'en',
                'language_name': 'English',
                'language_native': 'English',
                'created_at': '2017-06-21 20:53:51',
                'updated_at': '2017-06-21 20:53:51',
                'deleted_at': null
              }
            }
          ]
        },
        'form_sections': [
          {
            'id': 'bbbe3ecb-bf52-44be-b558-d59ed6cb324e',
            'form_id': '5612115f-9208-4696-9497-4398ae112f8b',
            'section_id': 'f3a2a283-9b1a-4c85-a1af-326ebda2ba2e',
            'sort_order': 1,
            'is_repeatable': '0',
            'max_repetitions': 0,
            'repeat_prompt_translation_id': null,
            'follow_up_question_id': null,
            'created_at': '2017-08-24 16:05:59',
            'updated_at': '2017-08-24 16:05:59',
            'deleted_at': null,
            'repeat_prompt_translation': null
          }
        ]
      },
      {
        'id': 'b0dc846c-ee75-4155-b717-4e698ce67bf5',
        'name_translation_id': '38c83a3c-726a-42be-a9ca-ea5e187c7d8f',
        'created_at': '2017-11-07 14:45:24',
        'updated_at': '2017-11-07 14:45:24',
        'deleted_at': null,
        'pivot': {
          'form_id': '5612115f-9208-4696-9497-4398ae112f8b',
          'section_id': 'b0dc846c-ee75-4155-b717-4e698ce67bf5',
          'sort_order': 3,
          'is_repeatable': 0,
          'max_repetitions': 0,
          'repeat_prompt_translation_id': '4806ad02-1c90-47c0-839f-9053c0267aac',
          'created_at': '2017-11-07 14:45:24',
          'updated_at': '2017-11-07 14:57:41'
        },
        'question_groups': [
          {
            'id': 'ad531eb0-6cf6-402b-9207-859a4db021b6',
            'created_at': '2017-11-07 14:52:56',
            'updated_at': '2017-11-07 14:52:56',
            'deleted_at': null,
            'pivot': {
              'section_id': 'b0dc846c-ee75-4155-b717-4e698ce67bf5',
              'question_group_id': 'ad531eb0-6cf6-402b-9207-859a4db021b6',
              'question_group_order': 1,
              'created_at': '2017-11-07 14:52:56',
              'updated_at': '2017-11-07 14:52:56'
            },
            'questions': [
              {
                'id': 'e36a33c0-215b-42b3-b1e8-0eedfa7b965c',
                'question_type_id': 'b58f23fa-52c7-435e-9b31-5fb771e79f41',
                'question_translation_id': '7a9b0314-cea9-4b2a-8397-0bdb70aed067',
                'question_group_id': 'ad531eb0-6cf6-402b-9207-859a4db021b6',
                'sort_order': 1,
                'var_name': 'o0300',
                'created_at': '2017-11-07 14:53:26',
                'updated_at': '2017-11-07 14:53:26',
                'deleted_at': null,
                'choices': [
                  {
                    'id': '8275f4f2-f25c-41ae-83ce-7cd07fa16ed6',
                    'choice_translation_id': 'e0e8a1bd-d323-4882-a59b-5ec3a5a3b861',
                    'val': '1',
                    'created_at': '2017-11-07 14:53:28',
                    'updated_at': '2017-11-07 14:53:39',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'e36a33c0-215b-42b3-b1e8-0eedfa7b965c',
                      'choice_id': '8275f4f2-f25c-41ae-83ce-7cd07fa16ed6',
                      'sort_order': 1,
                      'id': '8773688e-00a0-4047-99d4-ba46e7b7651d',
                      'created_at': '2017-11-07 14:53:28',
                      'updated_at': '2017-11-07 14:53:28'
                    },
                    'choice_translation': {
                      'id': 'e0e8a1bd-d323-4882-a59b-5ec3a5a3b861',
                      'created_at': '2017-11-07 14:53:28',
                      'updated_at': '2017-11-07 14:53:28',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': '421f9504-ba0d-41b9-976a-2e092b26f31c',
                          'translation_id': 'e0e8a1bd-d323-4882-a59b-5ec3a5a3b861',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Si',
                          'created_at': '2017-11-07 14:53:30',
                          'updated_at': '2017-11-07 14:53:31',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': 'c4c3b497-7baf-4558-8ae1-ceda9bc88ed5',
                          'translation_id': 'e0e8a1bd-d323-4882-a59b-5ec3a5a3b861',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Yes',
                          'created_at': '2017-11-07 14:54:14',
                          'updated_at': '2017-11-07 14:54:14',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  },
                  {
                    'id': '4064ee76-915b-4541-a213-301eadccd458',
                    'choice_translation_id': 'd6a23e6f-9198-4dac-8293-296e0d326470',
                    'val': '3',
                    'created_at': '2017-11-07 14:53:45',
                    'updated_at': '2017-11-07 14:54:01',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'e36a33c0-215b-42b3-b1e8-0eedfa7b965c',
                      'choice_id': '4064ee76-915b-4541-a213-301eadccd458',
                      'sort_order': 3,
                      'id': 'bd205f2c-fb67-41e9-8721-7d467d727c5b',
                      'created_at': '2017-11-07 14:53:45',
                      'updated_at': '2017-11-07 14:53:45'
                    },
                    'choice_translation': {
                      'id': 'd6a23e6f-9198-4dac-8293-296e0d326470',
                      'created_at': '2017-11-07 14:53:45',
                      'updated_at': '2017-11-07 14:53:45',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': '2df5a91f-3277-497c-bf4f-b91dcd99b150',
                          'translation_id': 'd6a23e6f-9198-4dac-8293-296e0d326470',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'This is the person being interviewed',
                          'created_at': '2017-11-07 14:53:58',
                          'updated_at': '2017-11-07 14:53:58',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': 'c03c71b2-ab8a-430f-a19f-e64b2822749c',
                          'translation_id': 'd6a23e6f-9198-4dac-8293-296e0d326470',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Esta es la persona siendo encuestada',
                          'created_at': '2017-11-07 14:53:48',
                          'updated_at': '2017-11-07 14:53:48',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  },
                  {
                    'id': 'a0de0c64-9207-401b-a252-a5f6307df9b5',
                    'choice_translation_id': '9d479037-1c31-4c3d-9f4a-363f9812fe78',
                    'val': '2',
                    'created_at': '2017-11-07 14:53:32',
                    'updated_at': '2017-11-07 14:53:39',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'e36a33c0-215b-42b3-b1e8-0eedfa7b965c',
                      'choice_id': 'a0de0c64-9207-401b-a252-a5f6307df9b5',
                      'sort_order': 2,
                      'id': 'dfa127a1-a6b7-4899-9a98-d8dba1329ec6',
                      'created_at': '2017-11-07 14:53:32',
                      'updated_at': '2017-11-07 14:53:32'
                    },
                    'choice_translation': {
                      'id': '9d479037-1c31-4c3d-9f4a-363f9812fe78',
                      'created_at': '2017-11-07 14:53:32',
                      'updated_at': '2017-11-07 14:53:32',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': 'c850c89a-df26-4665-94d3-9d5634806edc',
                          'translation_id': '9d479037-1c31-4c3d-9f4a-363f9812fe78',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'No',
                          'created_at': '2017-11-07 14:54:17',
                          'updated_at': '2017-11-07 14:54:17',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': 'e3169bc4-ea9a-474e-83b1-6cc123ae6aef',
                          'translation_id': '9d479037-1c31-4c3d-9f4a-363f9812fe78',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'No',
                          'created_at': '2017-11-07 14:53:34',
                          'updated_at': '2017-11-07 14:53:36',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  }
                ],
                'question_translation': {
                  'id': '7a9b0314-cea9-4b2a-8397-0bdb70aed067',
                  'created_at': '2017-11-07 14:53:26',
                  'updated_at': '2017-11-07 14:53:26',
                  'deleted_at': null,
                  'translation_text': [
                    {
                      'id': 'c384ae05-fd5c-4ac9-bde5-b7d1ade4597c',
                      'translation_id': '7a9b0314-cea9-4b2a-8397-0bdb70aed067',
                      'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                      'translated_text': '¿Todavia vive [o8888] con usted?',
                      'created_at': '2017-11-07 14:53:26',
                      'updated_at': '2018-02-08 17:16:24',
                      'deleted_at': null,
                      'locale': {
                        'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'es',
                        'language_name': 'Spanish',
                        'language_native': 'español',
                        'created_at': '2017-06-21 20:53:53',
                        'updated_at': '2017-06-21 20:53:53',
                        'deleted_at': null
                      }
                    },
                    {
                      'id': 'e3b6b7c1-d7dd-4ba7-a728-6422e214bea5',
                      'translation_id': '7a9b0314-cea9-4b2a-8397-0bdb70aed067',
                      'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'Does [o8888] still live with you?',
                      'created_at': '2017-11-07 14:57:23',
                      'updated_at': '2017-11-07 14:57:23',
                      'deleted_at': null,
                      'locale': {
                        'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'en',
                        'language_name': 'English',
                        'language_native': 'English',
                        'created_at': '2017-06-21 20:53:51',
                        'updated_at': '2017-06-21 20:53:51',
                        'deleted_at': null
                      }
                    }
                  ]
                },
                'question_type': {
                  'id': 'b58f23fa-52c7-435e-9b31-5fb771e79f41',
                  'name': 'multiple_choice',
                  'created_at': '2017-06-21 20:53:50',
                  'updated_at': '2017-06-21 20:53:50',
                  'deleted_at': null
                },
                'question_parameters': [],
                'assign_condition_tags': [
                  {
                    'id': '5e94ec1b-c998-419e-9fa2-f139350c94b8',
                    'condition_tag_id': 'f112efb2-abae-4d6a-bb78-476087841d15',
                    'logic': 'function(vars) { return vars["o0300"] == "2"; }',
                    'scope': 'section',
                    'created_at': '2017-11-09 20:36:22',
                    'updated_at': '2017-11-09 20:36:29',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'e36a33c0-215b-42b3-b1e8-0eedfa7b965c',
                      'assign_condition_tag_id': '5e94ec1b-c998-419e-9fa2-f139350c94b8',
                      'created_at': '2017-11-09 20:36:22',
                      'updated_at': '2017-11-09 20:36:22'
                    },
                    'condition': {
                      'id': 'f112efb2-abae-4d6a-bb78-476087841d15',
                      'name': 'o0300_not_still_living_with',
                      'created_at': '2017-11-09 20:36:22',
                      'updated_at': '2017-11-09 20:36:22',
                      'deleted_at': null
                    }
                  }
                ]
              }
            ],
            'skips': []
          },
          {
            'id': '71804a55-2620-402a-b984-00127139bcb4',
            'created_at': '2017-11-07 14:47:41',
            'updated_at': '2017-11-07 14:47:41',
            'deleted_at': null,
            'pivot': {
              'section_id': 'b0dc846c-ee75-4155-b717-4e698ce67bf5',
              'question_group_id': '71804a55-2620-402a-b984-00127139bcb4',
              'question_group_order': 4,
              'created_at': '2017-11-07 14:47:41',
              'updated_at': '2017-11-07 14:47:41'
            },
            'questions': [
              {
                'id': '0bd04e8c-7f1a-4306-9bce-4055c6aa6c8c',
                'question_type_id': 'd840f8cb-b68b-432a-9a47-2b0b5dc65377',
                'question_translation_id': 'cc8645c8-87a4-4740-a78c-90fb6761e4d5',
                'question_group_id': '71804a55-2620-402a-b984-00127139bcb4',
                'sort_order': 1,
                'var_name': 'o0600',
                'created_at': '2017-11-07 14:47:54',
                'updated_at': '2017-11-07 14:47:54',
                'deleted_at': null,
                'choices': [],
                'question_translation': {
                  'id': 'cc8645c8-87a4-4740-a78c-90fb6761e4d5',
                  'created_at': '2017-11-07 14:47:54',
                  'updated_at': '2017-11-07 14:47:54',
                  'deleted_at': null,
                  'translation_text': [
                    {
                      'id': '4f48a07f-5845-4a1e-b7dd-6734ce6d9ee6',
                      'translation_id': 'cc8645c8-87a4-4740-a78c-90fb6761e4d5',
                      'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'Approximately, when did [o8888] die?',
                      'created_at': '2017-11-07 14:48:15',
                      'updated_at': '2017-11-07 14:48:15',
                      'deleted_at': null,
                      'locale': {
                        'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'en',
                        'language_name': 'English',
                        'language_native': 'English',
                        'created_at': '2017-06-21 20:53:51',
                        'updated_at': '2017-06-21 20:53:51',
                        'deleted_at': null
                      }
                    },
                    {
                      'id': 'e49e26ad-41d1-408a-a322-27b9f1907fd0',
                      'translation_id': 'cc8645c8-87a4-4740-a78c-90fb6761e4d5',
                      'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'Lo siento mucho escucharlo. Aproximadamente, ¿cuando murio [o8888]?',
                      'created_at': '2017-11-07 14:47:54',
                      'updated_at': '2017-11-07 14:47:54',
                      'deleted_at': null,
                      'locale': {
                        'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'es',
                        'language_name': 'Spanish',
                        'language_native': 'español',
                        'created_at': '2017-06-21 20:53:53',
                        'updated_at': '2017-06-21 20:53:53',
                        'deleted_at': null
                      }
                    }
                  ]
                },
                'question_type': {
                  'id': 'd840f8cb-b68b-432a-9a47-2b0b5dc65377',
                  'name': 'year_month',
                  'created_at': '2017-06-21 20:53:50',
                  'updated_at': '2017-06-21 20:53:50',
                  'deleted_at': null
                },
                'question_parameters': [],
                'assign_condition_tags': []
              }
            ],
            'skips': [
              {
                'id': '4766b627-1f12-44d5-8cc2-e8b784cf09bf',
                'show_hide': '1',
                'any_all': '0',
                'precedence': 1,
                'created_at': '2017-11-07 14:48:36',
                'updated_at': '2017-11-07 14:48:36',
                'deleted_at': null,
                'pivot': {
                  'question_group_id': '71804a55-2620-402a-b984-00127139bcb4',
                  'skip_id': '4766b627-1f12-44d5-8cc2-e8b784cf09bf',
                  'created_at': '2017-11-07 14:48:36',
                  'updated_at': '2017-11-07 14:48:36'
                },
                'conditions': [
                  {
                    'id': '52749d5e-804e-4130-ab9f-e3902cee8f56',
                    'skip_id': '4766b627-1f12-44d5-8cc2-e8b784cf09bf',
                    'created_at': '2017-11-07 14:48:36',
                    'updated_at': '2017-11-07 14:48:36',
                    'deleted_at': null,
                    'condition_tag_name': 'o0400_died'
                  }
                ]
              }
            ]
          },
          {
            'id': 'ef7128fe-fa40-44fd-ab89-eb71e1904a9a',
            'created_at': '2017-11-07 14:49:09',
            'updated_at': '2017-11-07 14:49:09',
            'deleted_at': null,
            'pivot': {
              'section_id': 'b0dc846c-ee75-4155-b717-4e698ce67bf5',
              'question_group_id': 'ef7128fe-fa40-44fd-ab89-eb71e1904a9a',
              'question_group_order': 2,
              'created_at': '2017-11-07 14:49:09',
              'updated_at': '2017-11-07 14:49:09'
            },
            'questions': [
              {
                'id': 'b310bcf1-e10e-4ff7-994d-83b9314af543',
                'question_type_id': 'b58f23fa-52c7-435e-9b31-5fb771e79f41',
                'question_translation_id': '0d4eccb7-7ac4-4015-a4fb-a0e6196dedc3',
                'question_group_id': 'ef7128fe-fa40-44fd-ab89-eb71e1904a9a',
                'sort_order': 1,
                'var_name': 'o0400',
                'created_at': '2017-11-07 14:49:36',
                'updated_at': '2017-11-07 14:49:36',
                'deleted_at': null,
                'choices': [
                  {
                    'id': '622bae45-17f4-4cfb-9eae-ddfe845cdf40',
                    'choice_translation_id': 'eeecf219-4221-468a-959c-f213e0c054ef',
                    'val': '3',
                    'created_at': '2017-11-07 14:49:56',
                    'updated_at': '2017-12-19 21:15:10',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'b310bcf1-e10e-4ff7-994d-83b9314af543',
                      'choice_id': '622bae45-17f4-4cfb-9eae-ddfe845cdf40',
                      'sort_order': 3,
                      'id': '039dcbab-4a36-4789-aa21-691adc179569',
                      'created_at': '2017-11-07 14:49:56',
                      'updated_at': '2017-11-07 14:49:56'
                    },
                    'choice_translation': {
                      'id': 'eeecf219-4221-468a-959c-f213e0c054ef',
                      'created_at': '2017-11-07 14:49:56',
                      'updated_at': '2017-11-07 14:49:56',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': '5c9e6684-911e-42a4-abfa-bc68751c3a3e',
                          'translation_id': 'eeecf219-4221-468a-959c-f213e0c054ef',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Otra ciudad o region en Honduras',
                          'created_at': '2017-11-07 14:50:00',
                          'updated_at': '2017-12-19 21:14:14',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': 'b9075951-21c9-45fb-a04d-1bfa445003d7',
                          'translation_id': 'eeecf219-4221-468a-959c-f213e0c054ef',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Other city or region in Honduras',
                          'created_at': '2017-11-07 14:50:17',
                          'updated_at': '2017-12-19 21:16:12',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  },
                  {
                    'id': '0085bb98-e2b9-4a6a-a15c-00321dbdc5c3',
                    'choice_translation_id': '54244f8b-7297-4d00-ad0e-ae162cc643af',
                    'val': '4',
                    'created_at': '2017-12-19 21:12:46',
                    'updated_at': '2017-12-19 21:15:11',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'b310bcf1-e10e-4ff7-994d-83b9314af543',
                      'choice_id': '0085bb98-e2b9-4a6a-a15c-00321dbdc5c3',
                      'sort_order': 4,
                      'id': '22c0795d-8d1a-4ce7-b721-58bb817ab7c6',
                      'created_at': '2017-12-19 21:12:46',
                      'updated_at': '2017-12-19 21:12:46'
                    },
                    'choice_translation': {
                      'id': '54244f8b-7297-4d00-ad0e-ae162cc643af',
                      'created_at': '2017-12-19 21:12:46',
                      'updated_at': '2017-12-19 21:12:46',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': '4cf7b28f-9ed4-4bb3-8c6e-4e989d2a3584',
                          'translation_id': '54244f8b-7297-4d00-ad0e-ae162cc643af',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'USA',
                          'created_at': '2017-12-19 21:13:06',
                          'updated_at': '2017-12-19 21:13:06',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': 'dc855790-00c6-4147-9dd7-a51118052e7a',
                          'translation_id': '54244f8b-7297-4d00-ad0e-ae162cc643af',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'EEUU / USA',
                          'created_at': '2017-12-19 21:12:59',
                          'updated_at': '2017-12-19 21:15:31',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  },
                  {
                    'id': '60d5117f-ba23-4473-a4c2-593013a38832',
                    'choice_translation_id': 'e2050510-0a28-435f-88ce-a1e78851b3ce',
                    'val': '1',
                    'created_at': '2017-11-07 14:49:54',
                    'updated_at': '2017-11-07 14:50:15',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'b310bcf1-e10e-4ff7-994d-83b9314af543',
                      'choice_id': '60d5117f-ba23-4473-a4c2-593013a38832',
                      'sort_order': 1,
                      'id': '4331d3ef-11e7-4516-9a69-de88bbe1a66b',
                      'created_at': '2017-11-07 14:49:54',
                      'updated_at': '2017-11-07 14:49:54'
                    },
                    'choice_translation': {
                      'id': 'e2050510-0a28-435f-88ce-a1e78851b3ce',
                      'created_at': '2017-11-07 14:49:54',
                      'updated_at': '2017-11-07 14:49:54',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': '01599b1d-47e2-4197-8c43-c11215f15cfa',
                          'translation_id': 'e2050510-0a28-435f-88ce-a1e78851b3ce',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'This village',
                          'created_at': '2017-11-07 14:50:13',
                          'updated_at': '2017-11-07 14:50:13',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': 'f20a7926-2d70-41d7-ba9c-db3bf4e63d88',
                          'translation_id': 'e2050510-0a28-435f-88ce-a1e78851b3ce',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Esta aldea',
                          'created_at': '2017-11-07 14:49:56',
                          'updated_at': '2017-11-07 14:49:56',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  },
                  {
                    'id': '550edde9-2bc7-4a9f-90ba-04f8baebf66d',
                    'choice_translation_id': '5a7ba241-70f9-4115-906d-7fa71d5ba72e',
                    'val': '6',
                    'created_at': '2017-11-07 14:50:01',
                    'updated_at': '2017-12-19 21:15:14',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'b310bcf1-e10e-4ff7-994d-83b9314af543',
                      'choice_id': '550edde9-2bc7-4a9f-90ba-04f8baebf66d',
                      'sort_order': 6,
                      'id': '8675ba87-1371-4d50-ab42-fe5a32571c00',
                      'created_at': '2017-11-07 14:50:01',
                      'updated_at': '2017-11-07 14:50:01'
                    },
                    'choice_translation': {
                      'id': '5a7ba241-70f9-4115-906d-7fa71d5ba72e',
                      'created_at': '2017-11-07 14:50:01',
                      'updated_at': '2017-11-07 14:50:01',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': '1629281d-cd8c-4ddf-8479-1d10629fa4e7',
                          'translation_id': '5a7ba241-70f9-4115-906d-7fa71d5ba72e',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Murió',
                          'created_at': '2017-11-07 14:50:03',
                          'updated_at': '2017-11-07 14:50:06',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': 'b6bd99c9-2c43-466f-9c04-cd2209225750',
                          'translation_id': '5a7ba241-70f9-4115-906d-7fa71d5ba72e',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Died',
                          'created_at': '2017-11-07 14:50:25',
                          'updated_at': '2017-11-07 14:50:25',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  },
                  {
                    'id': 'cb716b80-14fe-45df-9613-16066efc8ded',
                    'choice_translation_id': 'caa7626f-456e-4385-b5bd-53d54f60b613',
                    'val': '2',
                    'created_at': '2017-12-19 21:13:12',
                    'updated_at': '2017-12-19 21:15:08',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'b310bcf1-e10e-4ff7-994d-83b9314af543',
                      'choice_id': 'cb716b80-14fe-45df-9613-16066efc8ded',
                      'sort_order': 2,
                      'id': '9df2ae99-407b-4f1c-ba61-19d24fc11c8e',
                      'created_at': '2017-12-19 21:13:12',
                      'updated_at': '2017-12-19 21:13:12'
                    },
                    'choice_translation': {
                      'id': 'caa7626f-456e-4385-b5bd-53d54f60b613',
                      'created_at': '2017-12-19 21:13:12',
                      'updated_at': '2017-12-19 21:13:12',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': '786233fd-9495-4800-82f6-6ecfe9153a34',
                          'translation_id': 'caa7626f-456e-4385-b5bd-53d54f60b613',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Village in Santa Rita, Copan Ruinas, San Jeronimo, or Cabañas',
                          'created_at': '2017-12-19 21:15:43',
                          'updated_at': '2017-12-19 21:15:59',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': 'ada39189-897d-461e-a4e2-827ec484cc3f',
                          'translation_id': 'caa7626f-456e-4385-b5bd-53d54f60b613',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Aldea dentro de Santa Rita, Copan Ruinas, San Jeronimo, o Cabañas',
                          'created_at': '2017-12-19 21:13:15',
                          'updated_at': '2017-12-19 21:15:52',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  },
                  {
                    'id': 'b18bda79-ddb6-4f7c-8b4e-fd69d146971a',
                    'choice_translation_id': '5f90846a-3597-496e-870f-07aa60fced33',
                    'val': '5',
                    'created_at': '2017-12-19 21:14:17',
                    'updated_at': '2017-12-19 21:15:13',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'b310bcf1-e10e-4ff7-994d-83b9314af543',
                      'choice_id': 'b18bda79-ddb6-4f7c-8b4e-fd69d146971a',
                      'sort_order': 5,
                      'id': 'cee7e683-3357-40d5-abdf-fe7c98fede8b',
                      'created_at': '2017-12-19 21:14:17',
                      'updated_at': '2017-12-19 21:14:17'
                    },
                    'choice_translation': {
                      'id': '5f90846a-3597-496e-870f-07aa60fced33',
                      'created_at': '2017-12-19 21:14:17',
                      'updated_at': '2017-12-19 21:14:17',
                      'deleted_at': null,
                      'translation_text': [
                        {
                          'id': '2853690b-a3b5-43d1-b0e8-e095e53bd00a',
                          'translation_id': '5f90846a-3597-496e-870f-07aa60fced33',
                          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Other country',
                          'created_at': '2017-12-19 21:16:18',
                          'updated_at': '2017-12-19 21:16:18',
                          'deleted_at': null,
                          'locale': {
                            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'en',
                            'language_name': 'English',
                            'language_native': 'English',
                            'created_at': '2017-06-21 20:53:51',
                            'updated_at': '2017-06-21 20:53:51',
                            'deleted_at': null
                          }
                        },
                        {
                          'id': 'c4b7015c-f7b5-4484-8599-fca709b43439',
                          'translation_id': '5f90846a-3597-496e-870f-07aa60fced33',
                          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                          'translated_text': 'Otro país',
                          'created_at': '2017-12-19 21:14:20',
                          'updated_at': '2017-12-19 21:14:25',
                          'deleted_at': null,
                          'locale': {
                            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                            'language_tag': 'es',
                            'language_name': 'Spanish',
                            'language_native': 'español',
                            'created_at': '2017-06-21 20:53:53',
                            'updated_at': '2017-06-21 20:53:53',
                            'deleted_at': null
                          }
                        }
                      ]
                    }
                  }
                ],
                'question_translation': {
                  'id': '0d4eccb7-7ac4-4015-a4fb-a0e6196dedc3',
                  'created_at': '2017-11-07 14:49:36',
                  'updated_at': '2017-11-07 14:49:36',
                  'deleted_at': null,
                  'translation_text': [
                    {
                      'id': '1e453959-1a4c-4b21-afee-2e36c9460da1',
                      'translation_id': '0d4eccb7-7ac4-4015-a4fb-a0e6196dedc3',
                      'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                      'translated_text': '¿Sabe donde está [o8888] actualmente?',
                      'created_at': '2017-11-07 14:49:36',
                      'updated_at': '2017-11-07 14:49:36',
                      'deleted_at': null,
                      'locale': {
                        'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'es',
                        'language_name': 'Spanish',
                        'language_native': 'español',
                        'created_at': '2017-06-21 20:53:53',
                        'updated_at': '2017-06-21 20:53:53',
                        'deleted_at': null
                      }
                    },
                    {
                      'id': '2276b17d-da9f-4d6f-919f-81f29bf6be6b',
                      'translation_id': '0d4eccb7-7ac4-4015-a4fb-a0e6196dedc3',
                      'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'Do you know where [o8888] is now?',
                      'created_at': '2017-11-07 14:49:49',
                      'updated_at': '2017-11-07 14:49:49',
                      'deleted_at': null,
                      'locale': {
                        'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'en',
                        'language_name': 'English',
                        'language_native': 'English',
                        'created_at': '2017-06-21 20:53:51',
                        'updated_at': '2017-06-21 20:53:51',
                        'deleted_at': null
                      }
                    }
                  ]
                },
                'question_type': {
                  'id': 'b58f23fa-52c7-435e-9b31-5fb771e79f41',
                  'name': 'multiple_choice',
                  'created_at': '2017-06-21 20:53:50',
                  'updated_at': '2017-06-21 20:53:50',
                  'deleted_at': null
                },
                'question_parameters': [
                  {
                    'id': '79fb9d28-8ae0-4689-b790-f85f4ee66336',
                    'question_id': 'b310bcf1-e10e-4ff7-994d-83b9314af543',
                    'parameter_id': '3',
                    'val': '5',
                    'created_at': '2017-12-19 21:17:13',
                    'updated_at': '2017-12-19 21:17:13',
                    'deleted_at': null,
                    'parameter': {
                      'id': '3',
                      'name': 'other',
                      'created_at': '2017-06-21 20:53:50',
                      'updated_at': '2017-06-21 20:53:50',
                      'deleted_at': null
                    }
                  }
                ],
                'assign_condition_tags': [
                  {
                    'id': '8cbb14c7-6c73-4e20-8252-e4762a077733',
                    'condition_tag_id': '8a108657-f92b-438b-b1af-d510b370320c',
                    'logic': 'function(vars) { return vars["o0400"] == "6"; }',
                    'scope': 'section',
                    'created_at': '2017-11-07 14:51:17',
                    'updated_at': '2017-12-19 21:18:32',
                    'deleted_at': null,
                    'pivot': {
                      'question_id': 'b310bcf1-e10e-4ff7-994d-83b9314af543',
                      'assign_condition_tag_id': '8cbb14c7-6c73-4e20-8252-e4762a077733',
                      'created_at': '2017-11-07 14:51:17',
                      'updated_at': '2017-11-07 14:51:17'
                    },
                    'condition': {
                      'id': '8a108657-f92b-438b-b1af-d510b370320c',
                      'name': 'o0400_died',
                      'created_at': '2017-11-07 14:51:17',
                      'updated_at': '2017-11-07 14:51:17',
                      'deleted_at': null
                    }
                  }
                ]
              }
            ],
            'skips': [
              {
                'id': '4d22bf47-b0c9-41da-8e44-b35dface1816',
                'show_hide': '1',
                'any_all': '0',
                'precedence': 0,
                'created_at': '2017-11-07 14:52:23',
                'updated_at': '2017-11-09 20:36:43',
                'deleted_at': null,
                'pivot': {
                  'question_group_id': 'ef7128fe-fa40-44fd-ab89-eb71e1904a9a',
                  'skip_id': '4d22bf47-b0c9-41da-8e44-b35dface1816',
                  'created_at': '2017-11-07 14:52:23',
                  'updated_at': '2017-11-07 14:52:23'
                },
                'conditions': [
                  {
                    'id': '57dbcec5-5640-4e45-aba4-4de6559fa575',
                    'skip_id': '4d22bf47-b0c9-41da-8e44-b35dface1816',
                    'created_at': '2017-11-09 20:36:41',
                    'updated_at': '2017-11-09 20:36:41',
                    'deleted_at': null,
                    'condition_tag_name': 'o0300_not_still_living_with'
                  }
                ]
              }
            ]
          }
        ],
        'name_translation': {
          'id': '38c83a3c-726a-42be-a9ca-ea5e187c7d8f',
          'created_at': '2017-11-07 14:45:24',
          'updated_at': '2017-11-07 14:45:24',
          'deleted_at': null,
          'translation_text': [
            {
              'id': 'f691e0ba-daac-4c33-b133-5cce981d436e',
              'translation_id': '38c83a3c-726a-42be-a9ca-ea5e187c7d8f',
              'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
              'translated_text': 'section',
              'created_at': '2017-11-07 14:45:24',
              'updated_at': '2017-11-07 14:45:24',
              'deleted_at': null,
              'locale': {
                'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                'language_tag': 'es',
                'language_name': 'Spanish',
                'language_native': 'español',
                'created_at': '2017-06-21 20:53:53',
                'updated_at': '2017-06-21 20:53:53',
                'deleted_at': null
              }
            }
          ]
        },
        'form_sections': [
          {
            'id': 'c4ff3068-2012-440d-a589-a5e9988c475a',
            'form_id': '5612115f-9208-4696-9497-4398ae112f8b',
            'section_id': 'b0dc846c-ee75-4155-b717-4e698ce67bf5',
            'sort_order': 3,
            'is_repeatable': '0',
            'max_repetitions': 0,
            'repeat_prompt_translation_id': '4806ad02-1c90-47c0-839f-9053c0267aac',
            'follow_up_question_id': 'e71e87b1-1d24-4ae9-b256-6674f496e9b9',
            'created_at': '2017-11-07 14:45:24',
            'updated_at': '2017-11-07 14:57:41',
            'deleted_at': null,
            'repeat_prompt_translation': {
              'id': '4806ad02-1c90-47c0-839f-9053c0267aac',
              'created_at': '2017-11-07 14:57:41',
              'updated_at': '2017-11-07 14:57:41',
              'deleted_at': null,
              'translation_text': []
            }
          }
        ]
      },
      {
        'id': '706b8f40-7d6d-4652-b1a5-ad2700f410cb',
        'name_translation_id': '212fda24-346b-4ddd-a8af-4055f4c66025',
        'created_at': '2017-09-12 15:22:37',
        'updated_at': '2017-09-12 15:22:37',
        'deleted_at': null,
        'pivot': {
          'form_id': '5612115f-9208-4696-9497-4398ae112f8b',
          'section_id': '706b8f40-7d6d-4652-b1a5-ad2700f410cb',
          'sort_order': 2,
          'is_repeatable': 0,
          'max_repetitions': 0,
          'repeat_prompt_translation_id': null,
          'created_at': '2017-09-12 15:22:37',
          'updated_at': '2017-09-12 15:22:37'
        },
        'question_groups': [
          {
            'id': 'be58d11e-ab3f-49e0-8f15-91f4dd4db8ff',
            'created_at': '2017-09-12 15:23:08',
            'updated_at': '2017-09-12 15:23:08',
            'deleted_at': null,
            'pivot': {
              'section_id': '706b8f40-7d6d-4652-b1a5-ad2700f410cb',
              'question_group_id': 'be58d11e-ab3f-49e0-8f15-91f4dd4db8ff',
              'question_group_order': 1,
              'created_at': '2017-09-12 15:23:08',
              'updated_at': '2017-09-12 15:23:08'
            },
            'questions': [
              {
                'id': 'e71e87b1-1d24-4ae9-b256-6674f496e9b9',
                'question_type_id': '5ae659b6-8945-4adc-86d5-a44b51531def',
                'question_translation_id': '2553a8fd-ee66-4bee-a9e6-3e9d9df869fa',
                'question_group_id': 'be58d11e-ab3f-49e0-8f15-91f4dd4db8ff',
                'sort_order': 1,
                'var_name': 'o8888',
                'created_at': '2017-09-12 15:23:25',
                'updated_at': '2017-09-12 15:23:44',
                'deleted_at': null,
                'choices': [],
                'question_translation': {
                  'id': '2553a8fd-ee66-4bee-a9e6-3e9d9df869fa',
                  'created_at': '2017-09-12 15:23:25',
                  'updated_at': '2017-09-12 15:23:25',
                  'deleted_at': null,
                  'translation_text': [
                    {
                      'id': '22840777-3190-4f26-ac5f-a39755f62285',
                      'translation_id': '2553a8fd-ee66-4bee-a9e6-3e9d9df869fa',
                      'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'These people were living with you the last time we visited:',
                      'created_at': '2017-09-12 15:23:25',
                      'updated_at': '2017-09-12 15:23:37',
                      'deleted_at': null,
                      'locale': {
                        'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'en',
                        'language_name': 'English',
                        'language_native': 'English',
                        'created_at': '2017-06-21 20:53:51',
                        'updated_at': '2017-06-21 20:53:51',
                        'deleted_at': null
                      }
                    },
                    {
                      'id': '27b93e0c-aac7-4753-940f-9ca470aa9e70',
                      'translation_id': '2553a8fd-ee66-4bee-a9e6-3e9d9df869fa',
                      'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                      'translated_text': 'La ultima vez que lo/a visitamos, estas personas se censaron con usted:',
                      'created_at': '2017-09-12 15:24:03',
                      'updated_at': '2017-11-16 16:57:39',
                      'deleted_at': null,
                      'locale': {
                        'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
                        'language_tag': 'es',
                        'language_name': 'Spanish',
                        'language_native': 'español',
                        'created_at': '2017-06-21 20:53:53',
                        'updated_at': '2017-06-21 20:53:53',
                        'deleted_at': null
                      }
                    }
                  ]
                },
                'question_type': {
                  'id': '5ae659b6-8945-4adc-86d5-a44b51531def',
                  'name': 'roster',
                  'created_at': '2017-06-21 20:53:50',
                  'updated_at': '2017-06-21 20:53:50',
                  'deleted_at': null
                },
                'question_parameters': [
                  {
                    'id': '637bf3ac-ca82-49d0-b0d4-2b71aeb30f6a',
                    'question_id': 'e71e87b1-1d24-4ae9-b256-6674f496e9b9',
                    'parameter_id': '8',
                    'val': 'false',
                    'created_at': '2017-11-17 20:09:10',
                    'updated_at': '2017-11-17 20:09:10',
                    'deleted_at': null,
                    'parameter': {
                      'id': '8',
                      'name': 'is_required',
                      'created_at': '2017-08-07 20:12:53',
                      'updated_at': '2017-08-07 20:12:53',
                      'deleted_at': null
                    }
                  },
                  {
                    'id': 'afa32dca-36be-4c87-aff1-9c62dfd0b250',
                    'question_id': 'e71e87b1-1d24-4ae9-b256-6674f496e9b9',
                    'parameter_id': '5',
                    'val': 'true',
                    'created_at': '2017-11-02 19:12:47',
                    'updated_at': '2017-11-02 19:12:47',
                    'deleted_at': null,
                    'parameter': {
                      'id': '5',
                      'name': 'read_only',
                      'created_at': '2017-08-07 20:12:53',
                      'updated_at': '2017-08-07 20:12:53',
                      'deleted_at': null
                    }
                  }
                ],
                'assign_condition_tags': []
              }
            ],
            'skips': []
          }
        ],
        'name_translation': {
          'id': '212fda24-346b-4ddd-a8af-4055f4c66025',
          'created_at': '2017-09-12 15:22:37',
          'updated_at': '2017-09-12 15:22:37',
          'deleted_at': null,
          'translation_text': [
            {
              'id': 'c008e833-8902-479f-84d5-f8a0553a424e',
              'translation_id': '212fda24-346b-4ddd-a8af-4055f4c66025',
              'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
              'translated_text': 'Section 2',
              'created_at': '2017-09-12 15:22:37',
              'updated_at': '2017-09-12 15:22:37',
              'deleted_at': null,
              'locale': {
                'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
                'language_tag': 'en',
                'language_name': 'English',
                'language_native': 'English',
                'created_at': '2017-06-21 20:53:51',
                'updated_at': '2017-06-21 20:53:51',
                'deleted_at': null
              }
            }
          ]
        },
        'form_sections': [
          {
            'id': 'f66babcb-297a-488f-97cb-76b250a1dc6c',
            'form_id': '5612115f-9208-4696-9497-4398ae112f8b',
            'section_id': '706b8f40-7d6d-4652-b1a5-ad2700f410cb',
            'sort_order': 2,
            'is_repeatable': '0',
            'max_repetitions': 0,
            'repeat_prompt_translation_id': null,
            'follow_up_question_id': null,
            'created_at': '2017-09-12 15:22:37',
            'updated_at': '2017-09-12 15:22:37',
            'deleted_at': null,
            'repeat_prompt_translation': null
          }
        ]
      }
    ],
    'name_translation': {
      'id': '861fdc65-a6d9-447f-9e3a-4b09337f5d7a',
      'created_at': '2017-08-17 14:47:04',
      'updated_at': '2017-08-17 14:47:04',
      'deleted_at': null,
      'translation_text': [
        {
          'id': '091a8248-40ea-40bb-a1ad-f9cc70499637',
          'translation_id': '861fdc65-a6d9-447f-9e3a-4b09337f5d7a',
          'locale_id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
          'translated_text': '1. Form 1: V3',
          'created_at': '2017-08-25 14:30:26',
          'updated_at': '2018-01-03 20:49:42',
          'deleted_at': null,
          'locale': {
            'id': '4a1d88ab-84d4-11e5-ba05-0800279114ca',
            'language_tag': 'es',
            'language_name': 'Spanish',
            'language_native': 'español',
            'created_at': '2017-06-21 20:53:53',
            'updated_at': '2017-06-21 20:53:53',
            'deleted_at': null
          }
        },
        {
          'id': 'be8da338-0699-412b-bb93-ab213d5f44c6',
          'translation_id': '861fdc65-a6d9-447f-9e3a-4b09337f5d7a',
          'locale_id': '48984fbe-84d4-11e5-ba05-0800279114ca',
          'translated_text': '1. Form 1: V3',
          'created_at': '2017-08-17 14:47:04',
          'updated_at': '2018-01-10 21:20:13',
          'deleted_at': null,
          'locale': {
            'id': '48984fbe-84d4-11e5-ba05-0800279114ca',
            'language_tag': 'en',
            'language_name': 'English',
            'language_native': 'English',
            'created_at': '2017-06-21 20:53:51',
            'updated_at': '2017-06-21 20:53:51',
            'deleted_at': null
          }
        }
      ]
    }
  }
}
